import { useNavigate, useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestQuestion from "./TestQuestion"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"
import { getRandomQuestion } from "../../utilities/helpers"
import {  useState } from "react"
import { useQuestions } from "../questions/useQuestions"
import Button from "../../components/Button"
import Results from "../categoryTest/Results"
import { useUpdateCorrectAnsweredIds } from "../categoryTest/useUpdateCorrectAnsweredIds"
import { useUpdateCorrectAnswers } from "./useUpdateCorrectAnswers"
import { useUpdateWrongAnswers } from "./useUpdateWrongAnswers"

//percentage
//sort imports
//refactoring

export default function Test() {
	const navigate = useNavigate()
	const { category } = useParams()

	const { isLoadingCategory, selectedCategory } = useCategory(category)



	const { isLoadingQuestions, questions } = useQuestions(selectedCategory?.id)

	const { updateCorrectAnswers, isCorrectAnswerUpdating } =
		useUpdateCorrectAnswers(selectedCategory?.id)

	// const { updateCorrectAnsweredIds, isCorrectAsweredIdsUpdating } =
	// 	useUpdateCorrectAnsweredIds(selectedCategory?.id)

	const { isUpdatingWrongAnswers, updateWrongAnswers } = useUpdateWrongAnswers(
		selectedCategory?.id
	)

	// const correctAnsweredIds = selectedCategory?.correctAnsweredIds

	

	const [isOpenAnswer, setIsOpenAnswer] = useState(false)


	// const idsSet = new Set(selectedCategory?.correctAnsweredIds)

	const [currentQuestions, setCurrentQuestions] = useState(
		selectedCategory?.correctAnsweredIds
	)
	const randomIndex = getRandomQuestion(currentQuestions?.length)
	const [currentQuestion, setCurrentQuestion] = useState(
		currentQuestions[randomIndex]
	)

	const [correctAttempts, setCorrectAttempts] = useState(
		selectedCategory?.correctAnswers
	)

	const [wrongAttempts, setWrongAttempts] = useState(
		selectedCategory?.wrongAnswers
	)
	
	const allCategoryQuestions = questions?.length

	// console.log(currentQuestions);
	// console.log(currentQuestion);
	// console.log(questions);
	

	const percentage = Math
		.floor
		// (  allCategoryQuestions?.length/100) * (correctAttempts + wrongAttempts)
		()

	//updates to custom hooks

	function handleWrongAnswer() {
		setWrongAttempts((wrongAttempts) => wrongAttempts + 1)
		updateWrongAnswers(wrongAttempts + 1)
		setIsOpenAnswer(false)

		setCurrentQuestions()
		setCurrentQuestion(currentQuestions[randomIndex])
	}

	function handleCorrectAnswer() {
		// updateCorrectAnsweredIds(currentQuestion?.id)
		setCorrectAttempts(correctAttempts + 1)
		updateCorrectAnswers(correctAttempts + 1)
		setIsOpenAnswer(false)

		setCurrentQuestions()
		setCurrentQuestion(currentQuestions[randomIndex])
	}

	function handleBackButton() {
		navigate(`/${category}/test/instructions`)
	}

	if (isLoadingCategory) return <Spinner>test</Spinner>

	if (currentQuestions?.length === 0)
		return <Results selectedCategory={selectedCategory} />

	return (
		<div>
			<Progressbar
				allCategoryQuestions={allCategoryQuestions}
				numTestQuestions={correctAttempts}
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
								// disabled={isLoadingCategory}
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
