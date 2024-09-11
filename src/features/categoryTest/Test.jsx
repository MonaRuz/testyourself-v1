import { useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestButtons from "./TestButtons"
import TestQuestion from "./TestQuestion"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"

import { getRandomQuestion } from "../../utilities/helpers"
import { useEffect, useState } from "react"
import { useQuestions } from "../questions/useQuestions"

//todo:prevent functions run twice
//missing questions in category styled components
//useCallback to getTestQuestions
//percentage

export default function Test() {
	const [isOpenAnswer, setIsOpenAnswer] = useState(false)

	const params = useParams()
	const category = params.category

	const [testQuestions, setTestQuestions] = useState(() => {
		const saved = localStorage.getItem(`${category}_testQuestions`)
		const initialValue = JSON.parse(saved)
		return initialValue || []
	})

	const randomIndex = getRandomQuestion(testQuestions?.length)

	const { isLoadingCategory, selectedCategory } = useCategory(category)

  const { questions } = useQuestions(selectedCategory?.id)

  const [currentQuestion, setCurrentQuestion] = useState(testQuestions[randomIndex])

	const [attempts, setAttempts] = useState(() => {
		const saved = localStorage.getItem(`${category}_attempts`)
		const initialValue = JSON.parse(saved)
		return initialValue
	})



	const allCategoryQuestions = questions?.length

	const numTestQuestions = testQuestions?.length - questions?.length

	if (isLoadingCategory) return <Spinner>test</Spinner>

	return (
		<div>
			<Progressbar
				attempts={attempts}
				allCategoryQuestions={allCategoryQuestions}
				category={category}
				numTestQuestions={numTestQuestions}
			/>
			<TestQuestion
				question={currentQuestion?.question}
				answer={currentQuestion?.answer}
				isOpenAnswer={isOpenAnswer}
			/>
			<TestButtons
				questionId={currentQuestion?.id}
				isOpenAnswer={isOpenAnswer}
				setIsOpenAnswer={setIsOpenAnswer}
				numTestQuestions={numTestQuestions}
				attempts={attempts}
				setAttempts={setAttempts}
				testQuestions={testQuestions}
        randomIndex={randomIndex}
        setCurrentQuestion={setCurrentQuestion}
        setTestQuestions={setTestQuestions}
			/>
		</div>
	)
}
