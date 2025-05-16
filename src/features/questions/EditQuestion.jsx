import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useQuestion } from "./useQuestion"
import { useEditQuestion } from "./useEditQuestion"
import Button from "../../components/Button"
import Spinner from "../../components/Spinner"

export default function EditQuestion() {
	const navigate = useNavigate()
	const param = useParams()

	const categoryId = param.categoryId
	const questionId = param.questionID

	//+error page if not question
	//upravená otázka se smaže neuloží jako upravená

	const { isEditing, editQuestion } = useEditQuestion(categoryId)

	const { isLoadingQuestion, question } = useQuestion(categoryId, questionId)

	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			question: question?.question,
			answer: question?.answer,
		},
	})

	function handleEditQuestion(editedData) {
		const fullEditedQuestion = {
			...question,
			...editedData,
		}

		editQuestion(
			{ categoryId, questionId, editedQuestion: fullEditedQuestion },
			{
				onSuccess: () => {
					navigate(-1)
				},
			}
		)
	}

	useEffect(
		function () {
			reset({
				question: question?.question,
				answer: question?.answer,
			})
		},
		[question?.question, question?.answer, reset]
	)

	if (isLoadingQuestion) return <Spinner>Question editor</Spinner>
	return (
		<div>
			<p className='text-blue-200 text-center p-3 text-sm sm:text-base mt-3'>
				Edit your question and answer:
			</p>
			<div className='mt-3'>
				<form
					onSubmit={handleSubmit(handleEditQuestion)}
					className='flex flex-col items-center'
				>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						Question:<br></br>
						<textarea
							id='question'
							{...register("question")}
							className='bg-black border border-yellow-200 mt-2 w-[250px] sm:w-96 md:w-[600px] text-sm p-2 h-20'
						></textarea>
					</label>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						Answer:<br></br>
						<textarea
							id='answer'
							{...register("answer")}
							className='bg-black border border-yellow-200 mt-2 w-[250px] sm:w-96 md:w-[600px] text-sm p-2 h-20'
						></textarea>
					</label>
					<div className='flex flex-col justify-center gap-3 mt-5'>
						<Button
							type='button'
							disabled={isEditing}
							onClick={() => navigate(-1)}
							style={{
								backgroundColor: "rgb(254 240 138)",
								width: "250px",
								height: "40px",
								fontFamily: "kanit",
							}}
						>
							Back
						</Button>
						<Button
							type='submit'
							style={{
								backgroundColor: "#88FFB6",
								width: "250px",
								height: "40px",
								fontFamily: "kanit",
							}}
						>
							Edit question and answer
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
