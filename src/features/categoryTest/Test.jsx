import { useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestButtons from "./TestButtons"
import TestQuestion from "./TestQuestion"
import {useCategory} from "../categories/useCategory"
import Spinner from "../../components/Spinner"
import { useTestQuestions } from "./useTestQuestions"
import { getRandomQuestion } from "../../utilities/helpers"
import { useState } from "react"

//todo:prevent functions run twice

export default function Test() {
  const[isOpenAnswer,setIsOpenAnswer]=useState(false)
  const[wrongAnswerEvent,setWrongAnswerEvent]
=useState(false)
  const params=useParams()
  const category=params.category

  const{isLoadingCategory,selectedCategory}=useCategory(category)

  const categoryId=selectedCategory?.id

  const{isLoadingTestQuestions,testQuestions}=useTestQuestions(categoryId)

  const randomIndex=getRandomQuestion(testQuestions?.length)

  console.log(testQuestions);
  
  // const{isLoadingQuestions,questions}=useQuestions(selectedCategory?.id)


  if(isLoadingCategory||isLoadingTestQuestions)return<Spinner>test</Spinner>

  return (
    <div>
      <Progressbar category={category} />
      <TestQuestion question={testQuestions[randomIndex].question} answer={testQuestions[randomIndex].answer} isOpenAnswer={isOpenAnswer}/>
      <TestButtons selectedCategory={selectedCategory} isOpenAnswer={isOpenAnswer} setIsOpenAnswer={setIsOpenAnswer} wrongAnswerEvent={wrongAnswerEvent} setWrongAnswerEvent={setWrongAnswerEvent} questionId={testQuestions[randomIndex].id}/>
    </div>
    
  )
}
