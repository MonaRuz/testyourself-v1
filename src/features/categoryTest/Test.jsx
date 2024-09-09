import { useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestButtons from "./TestButtons"
import TestQuestion from "./TestQuestion"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"
// import { useTestQuestions } from "./useTestQuestions"
import { getRandomQuestion } from "../../utilities/helpers"
import { useEffect, useRef, useState } from "react"
import { useQuestions } from "../questions/useQuestions"

//todo:prevent functions run twice
//missing questions in category styled components

export default function Test() {
	const [isOpenAnswer, setIsOpenAnswer] = useState(false)
	const [wrongAnswerEvent, setWrongAnswerEvent] = useState(false)
	const [testQuestions, setTestQuestions] = useState([])

	const params = useParams()
	const category = params.category

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	const categoryId = selectedCategory?.id
	const attempts = selectedCategory?.attempts

	const { isLoadingQuestions, questions } = useQuestions(categoryId)

	// console.log(questions);

	useEffect(
		function () {
			setTestQuestions(
				questions?.filter((q) => {
					console.log(q)

					return q.correctAnswer === true
				})
			)
		},
		[questions]
	)

  console.log(testQuestions);
  

	// const { isLoadingTestQuestions, testQuestions } = useTestQuestions(categoryId)

	const numTestQuestions = testQuestions?.length
	const randomIndex = getRandomQuestion(testQuestions?.length)

	if (isLoadingCategory || isLoadingQuestions) return <Spinner>test</Spinner>

	return (
		<div>
			<Progressbar
				category={category}
				numTestQuestions={numTestQuestions}
			/>
			<TestQuestion
			question={testQuestions[randomIndex]?.question}
			answer={testQuestions[randomIndex]?.answer}
			isOpenAnswer={isOpenAnswer}
			/>
			<TestButtons
			selectedCategory={selectedCategory}
			isOpenAnswer={isOpenAnswer}
			setIsOpenAnswer={setIsOpenAnswer}
			wrongAnswerEvent={wrongAnswerEvent}
			setWrongAnswerEvent={setWrongAnswerEvent}
			questionId={testQuestions[randomIndex]?.id}
			numTestQuestions={numTestQuestions}
			attempts={attempts}
			/>
		</div>
	)
}
