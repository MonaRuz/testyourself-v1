import { useQuestions } from "../questions/useQuestions"
// import {  useState } from "react"
import Spinner from "../../components/Spinner"
import {
	getCorrectAttempts,
	getWrongAttempts,
} from "../../services/localStorageFunctions"

export default function CategoryStats({ selectedCategory }) {
	const { id, highscore, category } = selectedCategory
	const { isLoadingQuestions, questions } = useQuestions(id)
	const allCategoryQuestions = questions?.length
	const correctAttempts = JSON.parse(getCorrectAttempts(category))
	const wrongAttempts = JSON.parse(getWrongAttempts(category))
	const percentage = Math.floor((correctAttempts / allCategoryQuestions) * 100 -
	(wrongAttempts / allCategoryQuestions) * 100)
		
	console.log(`${percentage} %`)



	

	//---------------------------------------------------------

	// useEffect(
	// 	function () {
	// 		const savedAttempts = localStorage.getItem(`${category}_attempts`)
	// 		const attempts = JSON.parse(savedAttempts)

	// 		const savedCorrectAttempts = localStorage.getItem(
	// 			`${category}_correctAttempts`
	// 		)
	// 		const correctAttempts = JSON.parse(savedCorrectAttempts)
	// 		setCurrentScore(Math.floor((correctAttempts / attempts) * 100))
	// 		setProgress(correctAttempts)
	// 	},
	// 	[category]
	// )

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
						<th className='text-yellow-200 font-normal'>{percentage} %</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Highscore:</th>
						<th className='text-yellow-200 font-normal'>{highscore} %</th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
