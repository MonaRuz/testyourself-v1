//later add conditionaly paragraph informing user abour successfully created question and answer
//add warn about no filled inputs
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import Spinner from "../../components/Spinner"
import useCategory from "../categories/useCategory"
import { useNewQuestion } from "./useNewQuestion"

export default function NewQuestion() {
	const navigate = useNavigate()
	const { category } = useParams()

	const { isLoading, selectedCategory} = useCategory(category)
	const selectedCategoryId = selectedCategory?.id

	const { register, handleSubmit, reset } = useForm()

	const { createQuestion, isCreating } = useNewQuestion()

	function onSubmit(newQuestion) {
		if (newQuestion.question === "" || newQuestion.answer === "") return
		createQuestion(
			{ selectedCategoryId, newQuestion },
			{
				onSuccess: () => {
					reset()
				},
			}
		)
	}

	if (isCreating||isLoading) return <Spinner />

	return (
		<div>
			<p className='text-blue-200 text-center p-3 text-sm sm:text-base mt-3'>
				Create new question for category {selectedCategory?.category}. Both fields must be filled.
			</p>
			<div className='mt-3'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center'
				>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New question:<br></br>
						<textarea
							{...register("question",{required:"This field is required!"})}
							className='bg-black border border-yellow-200 mt-2 w-72'
						></textarea>
					</label>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New answer:<br></br>
						<textarea
							{...register("answer",{required:"This field is required!"})}
							className='bg-black border border-yellow-200 mt-2 w-72'
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
