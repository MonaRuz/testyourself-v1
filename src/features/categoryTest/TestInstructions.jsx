import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
//conditionally rendered button restart
export default function TestInstructions() {
	const navigate = useNavigate()
	const params=useParams()
	const category=params.category
	
	return (
		<div className='mt-3'>
			<h3 className='text-center text-purple-200 border-y border-purple-200 mb-3 pb-1'>
				Test in category <span className="text-green-200">{category}</span>
			</h3>
			<div className='flex flex-col gap-1 items-center'>
				<Button
					onClick={() => navigate(`/${category}/test/running-test`)}
					style={{
						backgroundColor: "#88FFB6",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Run test
				</Button>
				<Button
					style={{
						backgroundColor: "rgb(252 165 165)",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Restart test
				</Button>
				<Button
					onClick={() => navigate(`/${category}/overview`)}
					style={{
						backgroundColor: "rgb(254 240 138)",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Back
				</Button>
			</div>

			<h3 className='text-center text-purple-200 border-y border-purple-200 m-3 pb-1'>
				Instructions
			</h3>
			<div className='flex flex-col items-center  border-b border-purple-200 pb-5 md:items-start '>
				<div className='flex flex-col md:flex-row gap-3 items-center md:ml-20'>
					<p className='text-yellow-200 text-center'>1.</p>
					<p className='text-blue-200 text-sm sm:text-base my-2 text-center md:text-left'>
						Try to answer the question as accurately as possible
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-3 items-center sm:items-left md:ml-20'>
					<p className='text-yellow-200 '>2.</p>
					<p className='text-blue-200  text-sm sm:text-base my-2 text-center md:text-left'>
						Reveal your preset correct answer and compare it to your current
						answer.
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-3 items-center sm:items-left md:ml-20'>
					<p className='text-yellow-200 '>3.</p>
					<p className='text-blue-200  text-sm sm:text-base my-2 text-center md:text-left'>
						Rate the correctness of your answer yourself.
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-3 items-center sm:items-left md:ml-20'>
					<p className='text-yellow-200 '>4.</p>
					<p className='text-blue-200  text-sm sm:text-base my-2 text-center md:text-left'>
						If you answer a question incorrectly, the test will repeat the
						question until you answer it correctly.
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-3 items-center sm:items-left md:ml-20'>
					<p className='text-yellow-200 '>5.</p>
					<p className='text-blue-200  text-sm sm:text-base my-2 text-center md:text-left'>
						Your progress will be saved. If you interrupt the test, you can
						return to it later. You can also restart the test at any time.
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-3 items-center md:ml-20'>
					<p className='text-yellow-200 '>6.</p>
					<p className='text-blue-200  text-sm sm:text-base text-center my-2 md:text-left'>
						Enjoy your test!
					</p>
				</div>
			</div>
		</div>
	)
}
