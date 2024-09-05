import { useParams } from "react-router-dom"
import Progressbar from "./Progressbar"
import TestButtons from "./TestButtons"
import TestQuestion from "./TestQuestion"
import { useQuestions } from "../questions/useQuestions"
import {useCategory} from "../categories/useCategory"
import Spinner from "../../components/Spinner"
import { useQuery } from "@tanstack/react-query"
import { getTestQuestions } from "../../services/apiTest"

export default function Test() {

  const params=useParams()
  const category=params.category

  const{isLoadingCategory,selectedCategory}=useCategory(category)

  const categoryId=selectedCategory?.id

  const{isLoading,data:testQuestions}=useQuery({
    queryFn:(categoryId)=>getTestQuestions(categoryId),
    queryKey:["testQuestions",categoryId]
  })

  // const{isLoadingQuestions,questions}=useQuestions(selectedCategory?.id)

  console.log(testQuestions);

  if(isLoadingCategory)return<Spinner>test</Spinner>

  return (
    <div>
      <Progressbar category={category} />
      <TestQuestion />
      <TestButtons category={category}/>
    </div>
    
  )
}
