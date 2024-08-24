import { getQuestion } from "../../services/apiQuestions"
import { useQuery } from "@tanstack/react-query"
 
export default function useQuestion(questionId,selectedCategory){
    const{isLoading,data:selectedQuestion,error}=useQuery({
        queryKey:["question"],
        queryFn:()=>getQuestion(questionId,selectedCategory),
      })
    return{isLoading,selectedQuestion,error}
}