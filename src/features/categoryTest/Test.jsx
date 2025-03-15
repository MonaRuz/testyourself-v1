import { useNavigate, useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestQuestion from "./TestQuestion"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"
import { getRandomQuestion } from "../../utilities/helpers"
import { useEffect, useState } from "react"
import { useQuestions } from "../questions/useQuestions"
import Button from "../../components/Button"
import Results from "../categoryTest/Results"
import { useWrongAnswers } from "../categoryTest/useWrongAnswers"
import { useCorrectAnswers } from "../categoryTest/useCorrectAnswers"
import {useCorrectAnsweredIds} from "../categoryTest/useCorrectAnsweredIds"


//percentage
//sort imports
//refactoring

export default function Test() {
	const navigate = useNavigate()
	const { category } = useParams()

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const [correctAttempts, setCorrectAttempts] = useState(selectedCategory?.correctAnswers)
	const [wrongAttempts, setWrongAttempts] = useState(selectedCategory?.wrongAnswers)
console.log(wrongAttempts);

	const { questions } = useQuestions(selectedCategory?.id)

	

	const idsSet=new Set(selectedCategory?.correctAnsweredIds)
	const currentQuestions=questions.filter((obj)=>!idsSet.has(obj.id))

	const randomIndex = getRandomQuestion(currentQuestions?.length)


	const {updateWrongAnswers,isWrongAnswerUpdating}=useWrongAnswers(selectedCategory?.id)
	const {updateCorrectAnswers,isCorrectAnswerUpdating}=useCorrectAnswers(selectedCategory?.id)

	const [isOpenAnswer, setIsOpenAnswer] = useState(false)

	const{updateCorrectAnsweredIds,isCorrectAsweredIdsUpdating}=useCorrectAnsweredIds(selectedCategory?.id)

	const [currentQuestion, setCurrentQuestion] = useState(
		currentQuestions[randomIndex]
	)

	const percentage = Math.floor((correctAttempts / selectedCategory?.correctAttempts+selectedCategory.wrongAnswers) * 100)

	//updates to custom hooks



	function handleWrongAnswer() {
		// console.log(wrongAttempts);
		
		setWrongAttempts(wrongAttempts+1)
		updateWrongAnswers(wrongAttempts+1)
		setIsOpenAnswer(false)
		setCurrentQuestion(currentQuestions[randomIndex])
	}

	function handleCorrectAnswer() {
		// console.log(correctAttempts);
		
		updateCorrectAnsweredIds(currentQuestion?.id)
		setCorrectAttempts(correctAttempts+1)
		updateCorrectAnswers(correctAttempts+1)
		setIsOpenAnswer(false)
		setCurrentQuestion(currentQuestions[randomIndex])
	}

	function handleBackButton() {
		navigate(`/${category}/test/instructions`)
	}

	const allCategoryQuestions = questions?.length

	if (isLoadingCategory) return <Spinner>test</Spinner>

	if (currentQuestions?.length === 0)
		return (
			<Results
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
