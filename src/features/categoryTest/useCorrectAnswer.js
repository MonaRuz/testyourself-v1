import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCorrectAnswers as updateCorrectAnswersApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useCorrectAnswers(categoryId){
    const queryClient=useQueryClient()
    const{isLoading:isCorectAnswersUpdating,mutate:updateCorrectAnswers}=useMutation({
		mutationFn:({categoryId,correctAnswers})=>updateCorrectAnswersApi(categoryId,correctAnswers),
		onSuccess:()=>{
			toast.success("Your answer was correct.")
			queryClient.invalidateQueries({
				queryKey:["testQuestions",categoryId]
			})
		},
		onError:(err)=>toast.error(err.message)
	})
    return{updateCorrectAnswers,isCorectAnswersUpdating}
}