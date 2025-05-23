import { useState } from "react"
import { useQuestions } from "./useQuestions"
import PropTypes from "prop-types"
import Spinner from "../../components/Spinner"
import Error from "../../components/Error"
import Question from "./Question"

QuestionsList.propTypes = {
	questions:PropTypes.array,
	categoryId:PropTypes.string
}

export default function QuestionsList({ questions,categoryId }) {
	// const [searchedExpression, setSearchedExpression] = useState()

	// const { isLoadingQuestions, questions } = useQuestions(selectedCategory.id)


	

	//searching questions

	// const searchedQuestions =
	// 	searchedExpression?.length > 0
	// 		? questions.filter((question) =>
	// 				`${question.question}`
	// 					.toLowerCase()
	// 					.includes(searchedExpression.toLowerCase())
	// 		  )
	// 		: questions

	//sorting questions

	// searchedQuestions?.sort((a, b) => {
	// 	const questionA = a.question?.toUpperCase()
	// 	const questionB = b.question?.toUpperCase()
	// 	if (questionA < questionB) {
	// 		return -1
	// 	}
	// 	if (questionA > questionB) {
	// 		return 1
	// 	}

	// 	return 0
	// })

	// if (isLoadingQuestions) return <Spinner>Category overview</Spinner>
	if (!questions)
		return (
			<Error
				className='text-red-300 mt-3'
				errorMessage={"There are no questions to display"}
			/>
		)
	return (
		<div className='w-full lg:max-w-xl'>
			<h2 className='text-purple-300 border-y border-purple-300 py-1 mt-3 mb-2 text-center'>
				Questions in category:
			</h2>
			<div className='flex justify-around items-center py-2 sm:justify-center'>
				<p className='text-yellow-200 sm:mr-4'>Search by question</p>
				<input
					className='bg-black border border-yellow-200 h-8 text-sm px-3 text-yellow-200'
					type='text'
					// value={searchedExpression}
					// onChange={(e) => setSearchedExpression(e.target.value)}
				/>
			</div>
			<ul>
				{questions?.map((q) => (
					<li key={q.id}>
						<Question
							question={q}
							categoryId={categoryId}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}


