import { useEffect, useState } from "react"
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
import { getRandomIndex } from "../../utilities/helpers"
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

	//getting data from local storage
	//testQuestions

	const questionsData = JSON.parse(getTestQuestions(category))

	const [testQuestions, setTestQuestions] = useState(questionsData)

	if (!questionsData || questionsData.length === 0) {
		setTestQuestions(questions)
		updateTestQuestions(questions, category)
	}

	//correctAttemps

	const correctAttemptsData = JSON.parse(getCorrectAttempts(category))

	const [correctAttempts, setCorrectAttempts] = useState(correctAttemptsData)

	if (correctAttemptsData === null || questionsData.length === 0) {
		setCorrectAttempts(0)
		updateCorrectAttempts(correctAttempts, category)
	}

	//wrongAttempts

	const wrongAttemptsData = JSON.parse(getWrongAttempts(category))

	const [wrongAttempts, setWrongAttempts] = useState(wrongAttemptsData)

	if (wrongAttemptsData === null || questionsData.length === 0) {
		setWrongAttempts(0)
		updateWrongAttempts(wrongAttempts, category)
	}

	//states

	const [isOpenAnswer, setIsOpenAnswer] = useState(false)

	const randomIndex = getRandomIndex(testQuestions?.length)


	//in first render this is NaN and filtering is not functioning
	const [currentQuestion, setCurrentQuestion] = useState(
		questions[randomIndex]
	)





	const allCategoryQuestions = questions?.length

	const percentage = Math.floor((correctAttempts / allCategoryQuestions) * 100 -
	(wrongAttempts / allCategoryQuestions) * 100)
		


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

	useEffect(function(){
		updateTestQuestions(testQuestions, category)
		setCurrentQuestion(testQuestions[randomIndex])
	},[testQuestions, category])
	

	if (isLoadingCategory || isLoadingQuestions) return <Spinner>test</Spinner>

	if (correctAttempts  === questions.length)
		return <Results selectedCategory={selectedCategory} percentage={percentage}/>

	return (
		<div>
			<Progressbar
				allCategoryQuestions={allCategoryQuestions}
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
