import Question from "./Question"
import Spinner from "../../components/Spinner"
import {useQuestions} from "./useQuestions"
import { useState } from "react"

export default function QuestionsList({ selectedCategory }) {
	const [searchedExpression, setSearchedExpression] = useState()
	const { isLoadingQuestions, questions } = useQuestions(selectedCategory.id)

	const searchedQuestions =
		searchedExpression?.length > 0
			? questions?.filter((question) =>
					`${question.question}`
						.toLowerCase()
						.includes(searchedExpression.toLowerCase())
			  )
			: questions

	if (isLoadingQuestions) return <Spinner />

	return (
		<div className='w-full lg:max-w-xl'>
			<h2 className='text-purple-200 border-y border-purple-200 pb-1 mt-3 mb-2 text-center'>
				Questions in category:
			</h2>
			<div className='flex justify-around items-center py-2 sm:justify-center'>
				<p className='text-yellow-200 sm:mr-4'>Search by question</p>
				<input
					className='bg-black border border-yellow-200 h-8 text-sm px-3 text-yellow-200'
					type='text'
					value={searchedExpression}
					onChange={(e) => setSearchedExpression(e.target.value)}
				/>
			</div>
			<ul>
				{searchedQuestions?.map((q) => (
					<li key={q.id}>
						<Question
							question={q}
							selectedCategory={selectedCategory}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
