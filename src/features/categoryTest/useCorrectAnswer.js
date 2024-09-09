import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCorrectAnswer as updateCorrectAnswerApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useCorrectAnswer(categoryId){
    const queryClient=useQueryClient()
    const{isLoading:isCorectAnswerUpdating,mutate:updateCorrectAnswer}=useMutation({
		mutationFn:({categoryId,questionId,numTestQuestions,attempts})=>updateCorrectAnswerApi(categoryId,questionId,numTestQuestions,attempts),
		onSuccess:()=>{
			toast.success("Your answer was correct.")
			queryClient.invalidateQueries({
				queryKey:["testQuestions",categoryId]
			})
		},
		onError:(err)=>toast.error(err.message)
	})
    return{updateCorrectAnswer,isCorectAnswerUpdating}
}