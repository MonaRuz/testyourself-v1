import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import { useState } from "react"
import { useQuestions } from "../questions/useQuestions"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"
import {
	getTestQuestions,
	resetTest,
} from "../../services/localStorageFunctions"

export default function TestInstructions() {
	const navigate = useNavigate()
	const { category } = useParams()

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const { isLoadingQuestions, questions } = useQuestions(selectedCategory?.id)

	const [testQuestions, setTestQuestions] = useState(
		JSON.parse(getTestQuestions(category))
	)

	function handleResetTest() {
		resetTest(category)
		setTestQuestions([])
	}

	if (isLoadingCategory || isLoadingQuestions)
		return <Spinner>instructions</Spinner>

	return (
		<div className='mt-3'>
			<h3 className='text-center text-purple-300 border-b border-purple-300 mb-3 pb-1'>
				Test in category <span className='text-green-200'>{category}</span>{" "}
				<span className='text-purple-100'>- {questions.length} questions</span>
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
				{testQuestions?.length > 0 && (
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
				Instructions
			</h3>
			<div className='mx-4 px-4 bg-zinc-900 '>
				<ol className='list-disc  pb-5 px-4 pt-3'>
					<li className='text-blue-200 text-sm sm:text-base '>
						Try to answer the question as accurately as possible
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Reveal your preset correct answer and compare it to your current
						answer.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Rate the correctness of your answer.
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
						Do not delete history of your browser, if you want save test in
						progress! Test is saved in your browser localstorage.
					</li>

					<li className='text-blue-200  text-sm sm:text-base'>
						Enjoy your test!
					</li>
				</ol>
			</div>
		</div>
	)
}
