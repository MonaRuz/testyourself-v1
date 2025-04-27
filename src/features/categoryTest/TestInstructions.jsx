import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import PropTypes from "prop-types"
import Button from "../../components/Button"

export default function TestInstructions({ dispatch, questions, savedTest }) {
	const navigate = useNavigate()
	const { category } = useParams()
	const [isSavedTest, setIsSavedTest] = useState(savedTest)

	function handleResetTest() {
		localStorage.removeItem(`savedTest_${category}`)
		dispatch({ type: "newQuestions", payload: questions })
		setIsSavedTest(false)
	}
	if(questions.lenght===0 || !questions)return
	return (
		<div className='mt-3'>
			<h3 className='text-center text-purple-300 border-b border-purple-300 mb-3 pb-1'>
				Test in category <span className='text-green-200'>{category}</span>{" "}
				<span className='text-purple-100'>- {questions.lenght} questions</span>
			</h3>
			<div className='flex flex-col gap-1 items-center'>
				<Button
					onClick={() => dispatch({ type: "startTest" })}
					style={{
						backgroundColor: "#88FFB6",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Run test
				</Button>
				{isSavedTest && (
					<Button
						onClick={handleResetTest}
						style={{
							backgroundColor: "rgb(252 165 165)",
							width: "250px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>
						Restart test
					</Button>
				)}
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
				Instructions:
			</h3>
			<div className='mx-4 px-4 bg-zinc-900 '>
				<ol className='list-disc  pb-5 px-4 pt-3'>
					<li className='text-blue-200 text-sm sm:text-base '>
						Try to answer the question as accurately as possible by your own
						words or write it.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Reveal your preset correct answer by click on SHOW ANSWER button and
						compare it to your current answer.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Rate the correctness of your answer by click on WRONG or CORRECT
						button.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						If you answer a question incorrectly, the test will repeat the
						question until your answer will be correct.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Output of this test will be percentual success based on the ratio of
						correct and incorrect answers. Your best results will be saved.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Your progress could be saved when you click
						on SAVE TEST button. You can also restart the test at any time in
						this page.
					</li>
					<li className='text-blue-200  text-sm sm:text-base'>
						Do not delete history of your browser, if you want save test in
						progress! Test will be saved in your browser.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Enjoy your test!
					</li>
				</ol>
			</div>
		</div>
	)
}

TestInstructions.propTypes = {
	dispatch: PropTypes.func,
	questions: PropTypes.array,
	savedTest: PropTypes.object,
}
