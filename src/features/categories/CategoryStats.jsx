import { useQuestions } from "../questions/useQuestions"
import { getSavedTest } from "../../services/localStorageFunctions"
import PropTypes from "prop-types"
import Spinner from "../../components/Spinner"
import Button from "../../components/Button"
import useHighscore from "../categoryTest/useHighscore"
export default function CategoryStats({ selectedCategory }) {
	const { id, highscore, category } = selectedCategory
	const { isLoadingQuestions, questions } = useQuestions(id)
	const { updateHighscore } = useHighscore(category)

	const allCategoryQuestions = questions?.length

	const savedTest = JSON.parse(getSavedTest(category))
	const correctAttempts = savedTest?.correctAttempts
	const wrongAttempts = savedTest?.wrongAttempts

	const percentage = Math.floor(
		(correctAttempts / allCategoryQuestions) * 100 -
			(wrongAttempts / allCategoryQuestions) * 100
	)

	function handleResetHighscore() {
		updateHighscore({ selectedCategoryId: id, percentage: 0 })
	}

	if (isLoadingQuestions) return <Spinner>category statistics</Spinner>

	return (
		<div className='mt-[13px] px-2'>
			<h3 className='text-purple-300 border-y border-purple-300 pb-1 mb-5 text-center'>
				Category statistics
			</h3>
			<table className='table-auto text-sm text-left border-separate border-spacing-x-10 border-spacing-y-1 pb-2 m-auto lg:w-72 bg-zinc-900'>
				<tbody>
					<tr>
						<th className='text-blue-200 font-normal'>Questions:</th>
						<th className='text-yellow-200 font-normal'>
							{allCategoryQuestions}
						</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Progress:</th>
						<th className='text-yellow-200 font-normal'>
							{correctAttempts ? correctAttempts : 0} / {allCategoryQuestions}
						</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Current score:</th>
						<th className='text-yellow-200 font-normal'>
							{percentage && percentage >= 0 ? percentage : 0} %
						</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Highscore:</th>
						<th className='text-yellow-200 font-normal'>{highscore} %</th>
					</tr>
				</tbody>
			</table>
			<div className="py-1 px-16">
				<Button
					onClick={handleResetHighscore}
					style={{
						backgroundColor: "#2e2e2e",
						color:"#d3d3d3",
						width: "140px",
						height: "40px",
						fontFamily: "kanit",
						
					}}
				>
					Reset highscore
				</Button>
			</div>
		</div>
	)
}

CategoryStats.propTypes = {
	selectedCategory: PropTypes.object,
	id: PropTypes.string,
	highscore: PropTypes.number,
	category: PropTypes.string,
}
