import { useNavigate, useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestQuestion from "./TestQuestion"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"

import { getRandomQuestion } from "../../utilities/helpers"
import { useState } from "react"
import { useQuestions } from "../questions/useQuestions"
import Button from "../../components/Button"

//todo:prevent functions run twice
//missing questions in category styled components
//percentage

export default function Test() {
	const navigate = useNavigate()
	const [isOpenAnswer, setIsOpenAnswer] = useState(false)

	const params = useParams()
	const category = params.category

	const [testQuestions,setTestQuestions] = useState(() => {
		const saved = localStorage.getItem(`${category}_testQuestions`)
		const initialValue = JSON.parse(saved)
		return initialValue || []
	})

	const randomIndex = getRandomQuestion(testQuestions?.length)

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const { questions } = useQuestions(selectedCategory?.id)

	const [currentQuestion, setCurrentQuestion] = useState(
		testQuestions[randomIndex]
	)



	const [attempts, setAttempts] = useState(() => {
		const saved = localStorage.getItem(`${category}_attempts`)
		const initialValue = JSON.parse(saved)
		return initialValue
	})

	function updateAttempts() {
		localStorage.setItem(
			`${category}_attempts`,
			JSON.stringify(Number(attempts) + 1)
		)
		setAttempts((attempts) => Number(attempts) + 1)
	}

	function updateTestQuestions(){
		const updatedTestQuestions= testQuestions.filter((q)=>{
			return q.id!==currentQuestion.id
		})
		setTestQuestions(updatedTestQuestions)	
		localStorage.setItem(`${category}_testQuestions`,
			JSON.stringify(testQuestions))				
	}

	function handleWrongAnswer() {
		updateAttempts()
		setIsOpenAnswer(false)
		setCurrentQuestion(testQuestions[randomIndex])
	}

	function handleCorrectAnswer() {
		updateAttempts()
		setIsOpenAnswer(false)
		setCurrentQuestion(testQuestions[randomIndex])		
		updateTestQuestions()	
	}

	const allCategoryQuestions = questions?.length

	const finishedQuestions = questions?.length-testQuestions?.length  

	console.log(testQuestions?.length)

	if (isLoadingCategory) return <Spinner>test</Spinner>

	return (
		<div>
			<Progressbar
				attempts={attempts}
				allCategoryQuestions={allCategoryQuestions}
				numTestQuestions={finishedQuestions}
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
				</div>
				<div>
					<Button
						onClick={() => navigate(`/${category}/test/instructions`)}
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
