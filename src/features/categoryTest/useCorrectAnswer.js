import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCorrectAnsweredQuestion as updateCorrectAnsweredQuestionApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useCorrectAnswer(categoryId){
    const queryClient=useQueryClient()
    const{isLoading:isCorectAnswerUpdating,mutate:updateCorrectAnswer}=useMutation({
		mutationFn:({categoryId,questionId,numTestQuestions})=>updateCorrectAnsweredQuestionApi(categoryId,questionId,numTestQuestions),
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