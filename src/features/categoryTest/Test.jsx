import { useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestButtons from "./TestButtons"
import TestQuestion from "./TestQuestion"
import { useQuestions } from "../questions/useQuestions"
import {useCategory} from "../categories/useCategory"
import Spinner from "../../components/Spinner"

export default function Test() {

  const params=useParams()
  const category=params.category

  const{isLoadingCategory,selectedCategory}=useCategory(category)

  const{isLoadingQuestions,questions}=useQuestions(selectedCategory?.id)

  console.log(questions);

  if(isLoadingCategory||isLoadingQuestions)return<Spinner>test</Spinner>

  return (
    <div>
      <Progressbar category={category} />
      <TestQuestion question={questions.at(0)}/>
      <TestButtons category={category}/>
    </div>
    
  )
}
