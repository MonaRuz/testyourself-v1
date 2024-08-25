//later add conditionaly paragraph informing user abour successfully created question and answer
//add warn about no filled inputs
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import { useForm } from "react-hook-form"
import { QueryClient, useMutation } from "@tanstack/react-query"
import { createQuestion } from "../../services/apiQuestions"
import Spinner from "../../components/Spinner"
import toast from "react-hot-toast"

export default function NewQuestion() {
	const navigate=useNavigate()
	const {category}=useParams()

	const{register,handleSubmit,reset}=useForm()
	const{mutate,isLoading:isCreating}=useMutation({
		mutationFn:(data)=>createQuestion(data),
		onSuccess:()=>{
			toast.success("Question was successfully created.")
			QueryClient.invalidateQueries({queryKey:["questions"]}),
			reset()
		},
		onError:(err)=>toast.error("Question wan not added.")
	}
)

	function onSubmit(data) {
		//new question handling
		mutate(data)
	}
	
	if(isCreating)return<Spinner/>

	return (
		<div>
			<p className='text-blue-200 text-center p-3 text-sm sm:text-base mt-3'>
				Create new question for category CATEGORY. All fields must be fulfilled.
			</p>
			<div className='mt-3'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center'
				>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New question:<br></br>
						<textarea {...register("question")}className='bg-black border border-yellow-200 mt-2 w-72'></textarea>
					</label>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New answer:<br></br>
						<textarea {...register("answer")}className='bg-black border border-yellow-200 mt-2 w-72'></textarea>
					</label>
					<div className='flex justify-center gap-3 mt-5'>
					<Button
					type="button"
						onClick={()=>navigate(-1)}
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
						type="submit"
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
