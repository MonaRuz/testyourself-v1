import {useQuestions} from "../questions/useQuestions"
import Spinner from "../../components/Spinner"
import { useEffect, useState } from "react"

export default function CategoryStats({selectedCategory}) {
	const[currentScore,setCurrentScore]=useState(0)
	const[progress,setProgress]=useState(0)
	const{id,highscore,category}=selectedCategory

	

	const { isLoadingQuestions, questions } = useQuestions(id)

	const questionsAmount=questions?.length

	useEffect(function(){
		const savedPercentage=localStorage.getItem(`${category}_percentage`)
		const percentage=JSON.parse(savedPercentage)
		setCurrentScore(percentage)

		const savedCorrectAttempts=localStorage.getItem(`${category}_correctAttempts`)
		const correctAttempts=JSON.parse(savedCorrectAttempts)
		setProgress(correctAttempts)
	},[category])

	
	if(isLoadingQuestions)return<Spinner>category statistics</Spinner>
	
	return (
		<div className='mt-[13px] px-2'>
			<h3 className='text-purple-300 border-y border-purple-300 pb-1 mb-5 text-center'>
				Category statistics
			</h3>
			<table className='table-auto text-sm text-left border-separate border-spacing-x-10 border-spacing-y-1 pb-2 m-auto lg:w-72 bg-zinc-900'>
				<tbody>
					<tr>
						<th className='text-blue-200 font-normal'>Questions:</th>
						<th className='text-yellow-200 font-normal'>{questionsAmount}</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Progress:</th>
						<th className='text-yellow-200 font-normal'>{progress} / {questionsAmount}</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Current score:</th>
						<th className='text-yellow-200 font-normal'>{currentScore} %</th>
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
