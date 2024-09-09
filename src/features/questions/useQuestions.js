import { getQuestions } from "../../services/apiQuestions"
import { useQuery } from "@tanstack/react-query"
 
export function useQuestions(categoryId){
    const{isLoading:isLoadingQuestions,data:questions}=useQuery({
        queryKey:["questions",categoryId],
        queryFn:()=>getQuestions(categoryId),
      })
    return{isLoadingQuestions,questions}
}