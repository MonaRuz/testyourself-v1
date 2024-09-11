import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import { useEffect, useState } from "react"
import { useQuestions } from "../questions/useQuestions"
import { useCategory } from "../categories/useCategory"
//edit instructions
//useCallback to resetTestQuestions
export default function TestInstructions() {
	const navigate = useNavigate()
	const params = useParams()
	const category = params.category

	const [testQuestions, setTestQuestions] = useState(() => {
		const saved = localStorage.getItem(`${category}_testQuestions`)
		const initialValue = JSON.parse(saved)
		return initialValue || []
	})

	const [attempts, setAttempts] = useState(() => {
		const saved = localStorage.getItem(`${category}_attempts`)
		const initialValue = JSON.parse(saved)
		return initialValue || 0
	})

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const { isLoadingQuestions, questions } = useQuestions(selectedCategory?.id)

	function resetTestQuestions() {
		localStorage.setItem(`${category}_testQuestions`, JSON.stringify(questions))
	}

	function resetAttempts() {
		localStorage.setItem(`${category}_attempts`, JSON.stringify(0))
	}

	useEffect(
		function () {
			if (testQuestions.length <= 0) {
				resetTestQuestions()
				resetAttempts()
			}
		},
		[testQuestions.length]
	)

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
				{testQuestions?.length !== questions?.length && (
					<Button
						onClick={resetTestQuestions}
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
