
import Button from "../../components/Button"

export default function EditQuestion() {

	function handleEditQuestion(id) {
		//edit question handling
	}

	return (
		<div>
			<p className='text-blue-200 text-center p-3 text-sm sm:text-base mt-3'>
				Edit your question and answer:
			</p>
			<div className="mt-3">
				<form
					className='flex flex-col items-center'
				>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						Question:<br></br>
						<textarea className='bg-black border border-yellow-200 mt-2 w-72'></textarea>
					</label>
					<label className='text-blue-200 text-center text-sm sm:text-base'>
						{" "}
						Answer:<br></br>
						<textarea className='bg-black border border-yellow-200 mt-2 w-72'></textarea>
					</label>
					<div className='flex justify-center mt-5'>
						<Button
							onClick={()=>handleEditQuestion(id)}
							style={{
								backgroundColor: "#88FFB6",
								width: "250px",
								height: "40px",
								fontFamily: "kanit",
							}}
						>Edit question and answer</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

