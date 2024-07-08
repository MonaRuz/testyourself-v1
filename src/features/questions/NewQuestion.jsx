//later add conditionaly paragraph informing user abour successfully created question and answer
//add warn about no filled inputs
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"

export default function NewQuestion() {
	const navigate=useNavigate()

	function handleNewQuestion() {
		//new question handling
	}

	return (
		<div>
			<p className='text-blue-200 text-center p-3 text-sm sm:text-base mt-3'>
				Create new question for category CATEGORY. All fields must be fulfilled.
			</p>
			<div className='mt-3'>
				<form
					onSubmit={handleNewQuestion}
					className='flex flex-col items-center'
				>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New question:<br></br>
						<textarea className='bg-black border border-yellow-200 mt-2 w-72'></textarea>
					</label>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						New answer:<br></br>
						<textarea className='bg-black border border-yellow-200 mt-2 w-72'></textarea>
					</label>
				</form>
				<div className='flex justify-center gap-3 mt-5'>
					<Button
						onClick={()=>navigate("category/overview")}
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
						onClick={handleNewQuestion}
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
			</div>
		</div>
	)
}
