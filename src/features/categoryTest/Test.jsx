import { useNavigate, useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestQuestion from "./TestQuestion"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"
import { getRandomQuestion } from "../../utilities/helpers"
import { useState } from "react"
import { useQuestions } from "../questions/useQuestions"
import Button from "../../components/Button"
import Results from "../categoryTest/Results"
import { useWrongAnswers } from "../categoryTest/useWrongAnswers"
import { useCorrectAnswers } from "../categoryTest/useCorrectAnswer"

//todo:prevent functions run twice
//missing questions in category styled components
//percentage
//sort imports
//refactoring

export default function Test() {
	const navigate = useNavigate()
	const { category } = useParams()

	const [testQuestions, setTestQuestions] = useState(() => {
		const saved = localStorage.getItem(`${category}_testQuestions`)
		const initialValue = JSON.parse(saved)
		return initialValue || []
	})

	

	const randomIndex = getRandomQuestion(testQuestions?.length)

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const [correctAttempts, setCorrectAttempts] = useState(selectedCategory?.correctAnswers)
	const [wrongAttempts, setWrongAttempts] = useState(selectedCategory?.wrongAnswers)

	const { questions } = useQuestions(selectedCategory?.id)

	const {updateWrongAnswers,isWrongAnswerUpdating}=useWrongAnswers(selectedCategory?.id,wrongAttempts)
	const {updateCorrectAnswers,isCorrectAnswerUpdating}=useCorrectAnswers(selectedCategory?.id,wrongAttempts)

	const [isOpenAnswer, setIsOpenAnswer] = useState(false)

	

	const [currentQuestion, setCurrentQuestion] = useState(
		testQuestions[randomIndex]
	)

	const percentage = Math.floor((correctAttempts / selectedCategory?.attempts) * 100)

	//updates to custom hooks


	function updateTestQuestions() {
		const updatedTestQuestions = testQuestions.filter((q) => {
			return q.id !== currentQuestion?.id
		})
		setTestQuestions(updatedTestQuestions)
		localStorage.setItem(
			`${category}_testQuestions`,
			JSON.stringify(testQuestions)
		)
	}

	function handleWrongAnswer() {
		setWrongAttempts((wrongAttempts)=>wrongAttempts+1)
		updateWrongAnswers()
		setIsOpenAnswer(false)
		setCurrentQuestion(testQuestions[randomIndex])
	}

	function handleCorrectAnswer() {
		setCorrectAttempts((correctAttempts)=>correctAttempts+1)
		updateCorrectAnswers()
		updateTestQuestions()
		setIsOpenAnswer(false)
		setCurrentQuestion(testQuestions[randomIndex])
	}

	function handleBackButton() {
		// localStorage.setItem(`${category}_attempts`, JSON.stringify(attempts))
		// localStorage.setItem(
		// 	`${category}_testQuestions`,
		// 	JSON.stringify(testQuestions)
		// )
		navigate(`/${category}/test/instructions`)
	}

	const allCategoryQuestions = questions?.length

	if (isLoadingCategory) return <Spinner>test</Spinner>

	if (testQuestions?.length === 0)
		return (
			<Results
				percentage={percentage}
				selectedCategory={selectedCategory}
			/>
		)

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
