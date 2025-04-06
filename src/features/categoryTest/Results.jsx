import { useNavigate, useParams } from "react-router-dom"
import PropTypes from "prop-types"
import useHighscore from "./useHighscore"
import Button from "../../components/Button"

export default function Results({ selectedCategory, percentage }) {
	const { category } = useParams()
	const navigate = useNavigate()

	const selectedCategoryId = selectedCategory?.id
	const savedHighscore = selectedCategory?.highscore

	const { updateHighscore } = useHighscore(category)

	function handleResetButton() {
		localStorage.removeItem(`savedTest_${category}`)
		if (savedHighscore < percentage)
			updateHighscore({ selectedCategoryId, percentage })
		navigate(`/${category}/overview`)
	}

	return (
		<div>
			<h3 className='text-purple-200 border-y border-purple-200 text-lg pb-1 text-center mt-5'>
				Test success in category <br></br> React - beginner :
			</h3>
			<div>
				{savedHighscore >= percentage && (
					<h1 className='text-red-200 text-center text-lg mt-10'>
						Your highscore was <span>{savedHighscore} %</span>
					</h1>
				)}
				{savedHighscore < percentage && (
					<h1 className='text-green-200 text-center text-lg mt-10'>
						Your new highscore!
					</h1>
				)}
			</div>
			<div className='flex justify-center items-center'>
				<h1 className='text-blue-200 text-6xl mt-14'>
					{percentage >= 0 ? percentage : 0} %
				</h1>
			</div>

			<div className='flex justify-center items-center mt-16 gap-2'>
				<Button
					onClick={handleResetButton}
					style={{
						backgroundColor: "#88FFB6",
						width: "133px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Back
				</Button>
			</div>
		</div>
	)
}

Results.propTypes = {
	selectedCategory: PropTypes.object,
	percentage: PropTypes.number,
}
