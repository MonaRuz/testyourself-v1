import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
//conditionally rendered button restart
export default function TestInstructions() {
	const navigate = useNavigate()
	const params = useParams()
	const category = params.category

	return (
		<div className='mt-3'>
			<h3 className='text-center text-purple-300 border-b border-purple-300 mb-3 pb-1'>
				Test in category <span className='text-green-200'>{category}</span>
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

			<h3 className='text-center text-purple-300 border-y border-purple-300 m-3 pb-1'>
				Instructions
			</h3>
			<div className='mx-4 px-4 border-b border-purple-300'>
				<ol className='list-disc  pb-5'>
					<li className='text-blue-200 text-sm sm:text-base '>
						Try to answer the question as accurately as possible
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Reveal your preset correct answer and compare it to your current
						answer.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Rate the correctness of your answer yourself.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						If you answer a question incorrectly, the test will repeat the
						question until you answer it correctly.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Your progress will be saved. If you interrupt the test, you can
						return to it later. You can also restart the test at any time.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Enjoy your test!
					</li>
				</ol>
			</div>
		</div>
	)
}
