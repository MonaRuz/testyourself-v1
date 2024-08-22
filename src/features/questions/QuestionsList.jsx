import Searchbar from "../../components/Searchbar"
import Question from "./Question"
import Spinner from "../../components/Spinner"
import useQuestions from "../categories/useQuestions"

export default function QuestionsList({ selectedCategory }) {
	const{isLoading,questions,error}=useQuestions(selectedCategory.id)





	if (isLoading) return <Spinner />

	return (
		<div className='w-full lg:max-w-xl'>
			<h2 className='text-purple-200 border-y border-purple-200 pb-1 mt-3 mb-2 text-center'>
				Questions in category:
			</h2>
			<Searchbar />
			<ul>
				{questions?.map((q) => (

					<li key={q.id}>
						<Question
							question={q.question}							
						/>
					</li>
				)
				)}
			</ul>
		</div>
	)
}
