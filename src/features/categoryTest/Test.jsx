import { useEffect, useReducer} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useCategory } from "../categories/useCategory"
import { useQuestions } from "../questions/useQuestions"
import { getSavedTest } from "../../services/localStorageFunctions"
import { saveTestQuestions } from "../../services/localStorageFunctions"
import Progressbar from "./Progressbar"
import TestQuestion from "./TestQuestion"
import Spinner from "../../components/Spinner"
import Button from "../../components/Button"
import Results from "../categoryTest/Results"
import TestInstructions from "./TestInstructions"

const getRandomIndex = (max) => {
	const min = Math.ceil(0)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min)
}

const initialState = {
	isRunningTest: false,
	isOpenAnswer: false,
	testQuestions: [],
	currentQuestion: {},
	correctAttempts: 0,
	wrongAttempts: 0,
}

function reducer(state, action) {
	switch (action.type) {
		case "startTest":
			return { ...state, isRunningTest: true }
		case "newQuestions":
			return {
				...state,
				testQuestions: action.payload,
				correctAttempts: 0,
				wrongAttempts: 0,
			}
		case "continueSavedTest":
			return {
				...state,
				testQuestions: action.questions,
				correctAttempts: action.correctAttempts,
				wrongAttempts: action.wrongAttempts,
			}
		case "randomQuestion":
			return {
				...state,
				currentQuestion:
					state.testQuestions[getRandomIndex(state.testQuestions.length)],
			}
		case "showAnswer":
			return { ...state, isOpenAnswer: true }
		case "correctAnswer":
			return {
				...state,
				correctAttempts: state.correctAttempts + 1,
				testQuestions: state.testQuestions.filter(
					(question) => state.currentQuestion.id !== question.id
				),
				isOpenAnswer: false,
			}
		case "wrongAnswer":
			return {
				...state,
				wrongAttempts: state.wrongAttempts + 1,
				currentQuestion:
					state.testQuestions[getRandomIndex(state.testQuestions.length)],
				isOpenAnswer: false,
			}
		default:
			throw new Error("Action is unknown")
	}
}

export default function Test() {
	const navigate = useNavigate()
	const { category } = useParams()

	const [
		{
			isRunningTest,
			testQuestions,
			currentQuestion,
			isOpenAnswer,
			correctAttempts,
			wrongAttempts,
		},
		dispatch,
	] = useReducer(reducer, initialState)

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const { isLoadingQuestions, questions } = useQuestions(selectedCategory?.id)

	const savedTest = JSON.parse(getSavedTest(category))

	const percentage = Math.floor(
		(correctAttempts / questions?.length) * 100 -
			(wrongAttempts / questions?.length) * 100
	)

	function handleWrongAnswer() {
		dispatch({ type: "wrongAnswer" })
		dispatch({ type: "randomQuestion" })
	}

	function handleCorrectAnswer() {
		dispatch({ type: "correctAnswer" })
		dispatch({ type: "randomQuestion" })
	}

	function handleSaveTest() {
		saveTestQuestions(testQuestions, correctAttempts, wrongAttempts, category)
		navigate(`/${category}/overview`)
	}

	useEffect(function () {
		if (savedTest) {
			dispatch({
				type: "continueSavedTest",
				questions: savedTest.testQuestions,
				correctAttempts: savedTest.correctAttempts,
				wrongAttempts: savedTest.wrongAttempts,
			})
		} else {
			dispatch({ type: "newQuestions", payload: questions })
		}
		dispatch({ type: "randomQuestion" })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!isRunningTest || isLoadingCategory || isLoadingQuestions)
		return (
			<TestInstructions
				dispatch={dispatch}
				questions={questions}
				savedTest={savedTest}
			/>
		)

	if (isLoadingCategory || isLoadingQuestions) return <Spinner>test</Spinner>

	if (correctAttempts === questions.length)
		return (
			<Results
				selectedCategory={selectedCategory}
				percentage={percentage}
			/>
		)

	return (
		<div>
			<Progressbar
				allCategoryQuestions={questions.length}
				progress={correctAttempts + 1}
				percentage={percentage}
			/>
			<TestQuestion
				question={currentQuestion?.question}
				answer={currentQuestion?.answer}
				isOpenAnswer={isOpenAnswer}
			/>
			<div className='flex flex-col justify-center items-center'>
				<div className=' mt-16'>
					{!isOpenAnswer && (
						<div className='flex flex-col justify-center gap-3'>
							<Button
								onClick={() => dispatch({ type: "showAnswer" })}
								style={{
									backgroundColor: "rgb(254 240 138)",
									width: "300px",
									height: "40px",
									fontFamily: "kanit",
									marginBottom: "3px",
								}}
							>
								Display correct answer
							</Button>
						</div>
					)}
					{isOpenAnswer && (
						<div className='flex justify-center items-center gap-1'>
							<Button
								onClick={handleWrongAnswer}
								style={{
									backgroundColor: "rgb(252 165 165)",
									width: "148px",
									height: "40px",
									fontFamily: "kanit",
								}}
							>
								Wrong
							</Button>

							<Button
								onClick={handleCorrectAnswer}
								style={{
									backgroundColor: "#88FFB6",
									width: "148px",
									height: "40px",
									fontFamily: "kanit",
								}}
							>
								Correct
							</Button>
						</div>
					)}
				</div>
				<div>
					<Button
						onClick={handleSaveTest}
						style={{
							backgroundColor: "rgb(254 240 138)",
							width: "300px",
							height: "40px",
							fontFamily: "kanit",
							marginTop: "3px",
						}}
					>
						Save test
					</Button>
				</div>
			</div>
		</div>
	)
}
