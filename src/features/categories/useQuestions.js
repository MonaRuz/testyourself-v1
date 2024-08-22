import { getQuestions } from "../../services/apiQuestions"
import { useQuery } from "@tanstack/react-query"
 
export default function useQuestions(categoryId){
    const{isLoading,data:questions,error}=useQuery({
        queryKey:["questions"],
        queryFn:()=>getQuestions(categoryId),
      })
    return{isLoading,questions,error}
}