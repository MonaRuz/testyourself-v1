//later add conditionaly paragraph informing user abour successfully created question and answer
//add warn about no filled inputs
import Button from "../../components/Button"

export default function NewQuestion() {

	function handleNewQuestion() {
		//new question handling
	}

	return (
		<div>
			<p className='text-blue-200 text-center p-3 text-sm sm:text-base mt-3'>
				Create new question for category CATEGORY. All fields must be fulfilled.
			</p>
			<div className="mt-3">
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
					<div className='flex justify-center mt-5'>
						<Button
							onClick={handleNewQuestion}
							style={{
								backgroundColor: "#88FFB6",
								width: "130px",
								height: "40px",
								fontFamily: "kanit",
							}}
						>Add question</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
