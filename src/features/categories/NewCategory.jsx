import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useNewCategory } from "./useNewCategory"
import Button from "../../components/Button"

//todo: debug: error with undefined sent value first (after this data was successfully submited)

export default function NewCategory() {
	const navigate = useNavigate()

	const { register, handleSubmit,formState } = useForm()

	const{errors}=formState

	const { createCategory } = useNewCategory()

	function handleNewCategory(data) {
		const newCategory = data.categoryName?.split(" ").join("")
		createCategory(newCategory, {
			onSuccess: () => {
				navigate(`/${newCategory}/overview`)
			},
		})
	}

	return (
		<form
			onSubmit={handleSubmit(handleNewCategory)}
			className='flex flex-col justify-center items-center'
		>
			<p className='text-red-300 text-sm mt-3'>
				( ...The new category name will not have any spaces!... )
			</p>
			<label className='text-yellow-200 text-center my-5'>
				Name of new category:<br></br>
				{errors?.categoryName?.message&&<p className="text-red-300 text-sm mt-1">{errors.categoryName.message}</p>}
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
