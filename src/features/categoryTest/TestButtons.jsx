import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {updateCorrectAnsweredQuestion} from "../../services/apiTest"
import toast from "react-hot-toast"
import { useCorrectAnswer } from "./useCorrectAnswer"
export default function TestButtons({
	selectedCategory,
	isOpenAnswer,
	setIsOpenAnswer,
	setWrongAnswerEvent,
	wrongAnswerEvent,
	questionId,
	numTestQuestions
}) {
	
	const navigate = useNavigate()
	const categoryId=selectedCategory?.id
	const categoryName=selectedCategory?.category
	console.log(numTestQuestions);
	
	
	const{updateCorrectAnswer,isCorectAnswerUpdating}=useCorrectAnswer(categoryId)

	const{updateWrongAnsweredQuestion,isWrongAnswerUpdating}=useCorrectAnswer(categoryId)
	

	function handleWrongAnswer() {
		updateWrongAnsweredQuestion({categoryId,questionId})
		setIsOpenAnswer(false)
	}

	function handleCorrectAnswer(){
		updateCorrectAnswer({categoryId,questionId,numTestQuestions})
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
								marginBottom:"3px"
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
					onClick={() => navigate(`/${categoryName}/test/instructions`)}
					style={{
						backgroundColor: "rgb(254 240 138)",
						width: "300px",
						height: "40px",
						fontFamily: "kanit",
						marginTop:"3px"
					}}
				>
					Back
				</Button>
			</div>
		</div>
	)
}
