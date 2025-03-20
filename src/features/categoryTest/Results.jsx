import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import useHighscore from "./useHighscore"
import { resetTest } from "../../services/localStorageFunctions"
import { useState } from "react"


export default function Results({ selectedCategory,percentage }) {
	const { category } = useParams()
	const navigate = useNavigate()

	const selectedCategoryId = selectedCategory?.id
	const savedHighscore = selectedCategory?.highscore

	const { updateHighscore } = useHighscore(category)

	console.log(savedHighscore,percentage);
	

	function handleBackButton() {
		navigate(`/${category}/overview`)
		if (savedHighscore < percentage)
			updateHighscore({ selectedCategoryId, percentage })
	}

	function handleResetButton() {
		resetTest(category)
		if (savedHighscore < percentage)
			updateHighscore({ selectedCategoryId, percentage })
		navigate(`/${category}/test/instructions`)
		
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
