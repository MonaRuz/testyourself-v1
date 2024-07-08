import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

//restrict amount of letters
export default function NewCategory() {
	const navigate = useNavigate()

	function handleNewCategory() {
    navigate("/category/overview")
  }

	return (
		<div className='flex flex-col justify-center items-center'>
			<label className='text-yellow-200 text-center my-5'>
				Name of new category:<br></br>
				<input
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
		</div>
	)
}
