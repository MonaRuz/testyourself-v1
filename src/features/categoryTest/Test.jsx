import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useCategory } from "../categories/useCategory"
import { useQuestions } from "../questions/useQuestions"
import {
	getCorrectAttempts,
	getTestQuestions,
	getWrongAttempts,
	updateCorrectAttempts,
	updateWrongAttempts,
	updateTestQuestions,
} from "../../services/localStorageFunctions"
import Progressbar from "./Progressbar"
import TestQuestion from "./TestQuestion"
import Spinner from "../../components/Spinner"
import Button from "../../components/Button"
import Results from "../categoryTest/Results"

//??refactoring

export default function Test() {
	const navigate = useNavigate()
	const { category } = useParams()

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const { isLoadingQuestions, questions } = useQuestions(selectedCategory?.id)

	//states

	const [isOpenAnswer, setIsOpenAnswer] = useState(false)

	const [testQuestions, setTestQuestions] = useState(
		JSON.parse(getTestQuestions(category))
	)

	const [correctAttempts, setCorrectAttempts] = useState(
		JSON.parse(getCorrectAttempts(category))
	)

	const [wrongAttempts, setWrongAttempts] = useState(
		JSON.parse(getWrongAttempts(category))
	)

	//setting new test in localstorage

	if (testQuestions === null) {
		setTestQuestions(questions)
		updateTestQuestions(questions, category)
		setCorrectAttempts(0)
		updateCorrectAttempts(correctAttempts, category)
		setWrongAttempts(0)
		updateWrongAttempts(wrongAttempts, category)
	}

	//getting random question

	const getRandomIndex = useCallback((max) => {
		const min = Math.ceil(0)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min) + min)
	}, [])

	const randomIndex = getRandomIndex(testQuestions.length)

	const [currentQuestion, setCurrentQuestion] = useState(questions[randomIndex])



	const percentage = Math.floor(
		(correctAttempts / questions.length) * 100 -
			(wrongAttempts / questions.length) * 100
	)

	//handlers

	function handleWrongAnswer() {
		setWrongAttempts((wrongAttempts) => wrongAttempts + 1)
		updateWrongAttempts(wrongAttempts + 1, category)
		setIsOpenAnswer(false)
	}

	function handleCorrectAnswer() {
		setTestQuestions(
			testQuestions.filter((question) => currentQuestion.id !== question.id)
		)
		setCorrectAttempts(correctAttempts + 1)
		setCurrentQuestion(testQuestions[randomIndex])
		updateCorrectAttempts(correctAttempts + 1, category)

		setIsOpenAnswer(false)
	}

	function handleBackButton() {
		navigate(`/${category}/test/instructions`)
	}

	useEffect(
		function () {
			updateTestQuestions(testQuestions, category)
			setCurrentQuestion(testQuestions[randomIndex])
		},
		[testQuestions, category, randomIndex]
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
								onClick={() => setIsOpenAnswer(!isOpenAnswer)}
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
						onClick={handleBackButton}
						style={{
							backgroundColor: "rgb(254 240 138)",
							width: "300px",
							height: "40px",
							fontFamily: "kanit",
							marginTop: "3px",
						}}
					>
						Back
					</Button>
				</div>
			</div>
		</div>
	)
}
