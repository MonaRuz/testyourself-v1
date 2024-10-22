import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import Spinner from "../../components/Spinner"
import { useCategory } from "../categories/useCategory"
import { useNewQuestion } from "./useNewQuestion"

export default function NewQuestion() {
	const navigate = useNavigate()
	const { category } = useParams()

	const { isLoadingCategory, selectedCategory } = useCategory(category)
	const selectedCategoryId = selectedCategory?.id

	const { register, handleSubmit, reset, formState } = useForm()

	const { errors } = formState

	const { createQuestion, isCreating } = useNewQuestion()

	function onSubmit(newQuestion) {
		if (newQuestion.question === "" || newQuestion.answer === "") return
		createQuestion(
			{ selectedCategoryId, newQuestion, selectedCategory },
			{
				onSuccess: () => {
					reset()
				},
			}
		)
	}

	if (isLoadingCategory) return <Spinner />

	return (
		<div>
			<p className='text-blue-200 text-center p-3 text-sm sm:text-base mt-3'>
				Create new question for category{" "}
				<span className='text-green-200'>{selectedCategory?.category}</span>.
				Both fields must be filled.
			</p>
			<div className='mt-3'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center'
				>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New question:<br></br>
						{errors?.question?.message && (
							<p className='text-red-300 text-sm mt-1'>
								{errors.question.message}
							</p>
						)}
						<textarea
							{...register("question", { required: "This field is required!" })}
							className='bg-black border border-yellow-200 mt-2 w-[250px] sm:w-96 md:w-[600px] text-sm p-2 h-20'
						></textarea>
					</label>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New answer:<br></br>
						{errors?.answer?.message && (
							<p className='text-red-300 text-sm mt-1'>
								{errors.answer.message}
							</p>
						)}
						{/*todo: style scrollbar */}
						<textarea
							{...register("answer", { required: "This field is required!" })}
							className='bg-black border border-yellow-200 mt-2 text-sm p-2 w-[250px] sm:w-96 md:w-[600px] h-20'
						></textarea>
					</label>
					<div className='flex justify-center gap-3 mt-5'>
						<Button
							type='button'
							onClick={() => navigate(-1)}
							style={{
								backgroundColor: "rgb(254 240 138)",
								width: "130px",
								height: "40px",
								fontFamily: "kanit",
							}}
						>
							Back
						</Button>
						<Button
							disabled={isCreating}
							type='submit'
							style={{
								backgroundColor: "#88FFB6",
								width: "130px",
								height: "40px",
								fontFamily: "kanit",
							}}
						>
							Add question
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
