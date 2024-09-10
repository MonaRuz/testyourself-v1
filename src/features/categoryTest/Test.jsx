import { useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestButtons from "./TestButtons"
import TestQuestion from "./TestQuestion"
import { useCategory } from "../categories/useCategory"
import Spinner from "../../components/Spinner"


import { useEffect, useState } from "react"
import { useQuestions } from "../questions/useQuestions"


//todo:prevent functions run twice
//missing questions in category styled components
//useCallback to getTestQuestions
//percentage

export default function Test() {
 
	const [isOpenAnswer, setIsOpenAnswer] = useState(false)
	const [wrongAnswerEvent, setWrongAnswerEvent] = useState(false)
  const[testQuestions,setTestQuestions]=useState([])

  
	const params = useParams()
	const category = params.category
  
  const {isLoadingCategory,selectedCategory}=useCategory(category)

  const{questions}=useQuestions(selectedCategory?.id)

  const allCategoryQuestions=questions?.length
	const attempts = selectedCategory?.attempts



	console.log(testQuestions);

	function getTestQuestions(){
    const saved = localStorage.getItem(`${category}_testQuestions`)
		const initialValue = JSON.parse(saved)
		setTestQuestions(initialValue)
  }


  

	// const { isLoadingTestQuestions, testQuestions } = useTestQuestions(categoryId)

	const numTestQuestions = testQuestions?.length-questions?.length

	// const randomIndex = getRandomQuestion(testQuestions?.length)
  useEffect(function(){
    getTestQuestions()
  },[])
  

	if (isLoadingCategory ) return <Spinner>test</Spinner>

	return (
		<div>
			<Progressbar
      allCategoryQuestions={allCategoryQuestions}
				category={category}
				numTestQuestions={numTestQuestions}
			/>
			<TestQuestion
			// question={testQuestions[randomIndex]?.question}
			// answer={testQuestions[randomIndex]?.answer}
			isOpenAnswer={isOpenAnswer}
			/>
			<TestButtons
			selectedCategory={selectedCategory}
			isOpenAnswer={isOpenAnswer}
			setIsOpenAnswer={setIsOpenAnswer}
			wrongAnswerEvent={wrongAnswerEvent}
			setWrongAnswerEvent={setWrongAnswerEvent}
			// questionId={testQuestions[randomIndex]?.id}
			numTestQuestions={numTestQuestions}
			attempts={attempts}
			/>
		</div>
	)
}
