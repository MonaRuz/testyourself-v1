import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
// import {useCorrectAnswer} from "../categoryTest/useCorrectAnswer"
// import {useWrongAnswer} from "../categoryTest/useWrongAnswer"


export default function TestButtons({
	// selectedCategory,
	isOpenAnswer,
	setIsOpenAnswer,
	testQuestions,
	attempts,
	setAttempts,
	questionId,
	setCurrentQuestion,
	randomIndex,
	setTestQuestions
}) {
	const category=useParams().category
	const navigate = useNavigate()
	// const category = selectedCategory?.category

	
	

	function updateAttempts() {
		localStorage.setItem(
			`${category}_attempts`,
			JSON.stringify(Number(attempts) + 1)
		)
		setAttempts((attempts)=>Number(attempts)+1)
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

		const updatedTestQuestions=testQuestions?.filter((q)=>q.id!==questionId)
		console.log(updatedTestQuestions);

		localStorage.setItem(`${category}_testQuestions`,
			JSON.stringify(updatedTestQuestions))
		setTestQuestions(updatedTestQuestions)
	}
	return (
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
	)
}
