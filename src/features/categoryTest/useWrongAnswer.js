import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateWrongAnswer as updateWrongAnswerApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useWrongAnswer(categoryId){
    const queryClient=useQueryClient()
    const{isLoading:isWrongAnswerUpdating,mutate:updateWrongAnswer}=useMutation({
		mutationFn:({categoryId,questionId,attempts})=>updateWrongAnswerApi(categoryId,questionId,attempts),
		onSuccess:()=>{
			toast.success("Your answer was not correct.")
			queryClient.invalidateQueries({
				queryKey:["testQuestions",categoryId]
			})
		},
		onError:(err)=>toast.error(err.message)
	})
    return{updateWrongAnswer,isWrongAnswerUpdating}
}