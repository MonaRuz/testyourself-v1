import { useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestButtons from "./TestButtons"
import TestQuestion from "./TestQuestion"
import {useCategory} from "../categories/useCategory"
import Spinner from "../../components/Spinner"
import { useTestQuestions } from "./useTestQuestions"
import { getRandomQuestion } from "../../utilities/helpers"

//todo:prevent functions run twice

export default function Test() {

  const params=useParams()
  const category=params.category

  const{isLoadingCategory,selectedCategory}=useCategory(category)

  const categoryId=selectedCategory?.id

  const{isLoadingTestQuestions,testQuestions}=useTestQuestions(categoryId)

  const randomIndex=getRandomQuestion(testQuestions?.length)

  console.log(randomIndex);
  
  // const{isLoadingQuestions,questions}=useQuestions(selectedCategory?.id)

  console.log(testQuestions);

  if(isLoadingCategory||isLoadingTestQuestions)return<Spinner>test</Spinner>

  return (
    <div>
      <Progressbar category={category} />
      <TestQuestion question={testQuestions[randomIndex].question} answer={testQuestions[randomIndex].answer}/>
      <TestButtons category={category}/>
    </div>
    
  )
}
