import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import useHighscore from "./useHighscore"

export default function Results({ percentage, selectedCategory }) {
	const { category } = useParams()
	const navigate = useNavigate()

	const selectedCategoryId = selectedCategory?.id
	const savedHighscore = selectedCategory?.highscore

	//to custom hook:
	const { setHighscore } = useHighscore(category)

	//resets to custom hooks
	function resetQuestions() {
		localStorage.setItem(`${category}_testQuestions`, JSON.stringify([]))
	}

	function resetAttempts() {
		localStorage.setItem(`${category}_attempts`, JSON.stringify(0))
	}
	function resetCorrectAttempts() {
		localStorage.setItem(`${category}_correctAttempts`, JSON.stringify(0))
	}

	function resetTestQuestions() {
		resetQuestions()
		resetAttempts()
		resetCorrectAttempts()
	}

	function handleBackButton() {
		resetTestQuestions()
		navigate(`/${category}/overview`)
		if (savedHighscore < percentage)
			setHighscore({ selectedCategoryId, percentage })
	}

	function handleResetButton() {
		resetTestQuestions()
		navigate(`/${category}/test/instructions`)
		if (savedHighscore < percentage)
			setHighscore({ selectedCategoryId, percentage })
	}

	return (
		<div>
			<h3 className='text-purple-200 border-y border-purple-200 text-lg pb-1 text-center mt-5'>
				Test success in category <br></br> React - beginner :
			</h3>
			<div className='flex justify-center items-center mt-10'>
				<h1 className='text-blue-200 text-6xl mt-14 ml-10'>{percentage} %</h1>
			</div>
			<div className='flex justify-center items-center mt-16 gap-2'>
				<Button
					onClick={handleBackButton}
					style={{
						backgroundColor: "rgb(254 240 138)",
						width: "133px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Back
				</Button>
				<Button
					onClick={handleResetButton}
					style={{
						backgroundColor: "#88FFB6",
						width: "133px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Restart
				</Button>
			</div>
		</div>
	)
}
