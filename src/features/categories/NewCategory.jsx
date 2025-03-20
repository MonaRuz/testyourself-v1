import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useNewCategory } from "./useNewCategory"
import Button from "../../components/Button"

export default function NewCategory() {
	const navigate = useNavigate()

	const { register, handleSubmit,formState } = useForm()
	const { createCategory } = useNewCategory()

	const{errors}=formState


	function handleNewCategory(data) {
		const newCategory = data.categoryName
		createCategory(newCategory, {
			onSuccess: () => {
				navigate(`/${newCategory}/overview`)
			},
		})
		console.log(newCategory);
	}

	return (
		<form
			onSubmit={handleSubmit(handleNewCategory)}
			className='flex flex-col justify-center items-center'
		>
			<label className='text-yellow-200 text-center my-5'>
				Name of new category:<br></br>
				{errors?.categoryName?.message&&<p className="text-red-300 text-sm mt-1">{errors?.categoryName?.message}</p>}
				<input
					id='categoryName'
					{...register("categoryName", {
						required: "This field must be filled!",
					})}
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
