import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCategory } from "../../services/apiCategories"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"

//restrict amount of letters
export default function NewCategory() {
	const navigate = useNavigate()
	const queryClient=useQueryClient()

const{register,handleSubmit}=useForm()

const{isLoading,mutate}=useMutation({
	mutationFn:createCategory,
	onSuccess:()=>{
		toast.success("New category was successfully created")
		queryClient.invalidateQueries({
			queryKey:["categories"]
		})
	},
	onError:(err)=>toast.error(err.message)
})

function handleNewCategory(newCategory) {
	console.log(newCategory);
	
    // navigate(`/${newCategory}/overview`)
}

	return (
		<form onSubmit={handleSubmit(handleNewCategory)} className='flex flex-col justify-center items-center'>
			<label className='text-yellow-200 text-center my-5'>
				Name of new category:<br></br>
				<input
				id="categoryName"
				{...register("categoryName",{required:"This field must be filled!"})}
					className='bg-black border border-yellow-200 w-72 my-5 h-8'
					type='text'
				/>
			</label>

			<Button
				onClick={handleNewCategory}
				style={{
					backgroundColor: "#88FFB6",
					width: "250px",
					height: "40px",
					fontFamily: "kanit",
				}}
			>
				Create new category
			</Button>
		</form>
	)
}
