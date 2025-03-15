import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateCorrectAnsweredIds as updateCorrectAnsweredIdsAPI } from "../../services/apiTest"

export function useUpdateCorrectAnsweredIds(categoryId){
    const queryClient=useQueryClient()
    const{isLoading:isCorrectAsweredIdsUpdating,mutate:updateCorrectAnsweredIds}=useMutation({
		mutationFn:(currentQuestionId)=>updateCorrectAnsweredIdsAPI(categoryId,currentQuestionId),
		onSuccess:()=>{
			queryClient.invalidateQueries({
				queryKey:["category",categoryId]
			})
		},
		onError:(err)=>toast.error(err.message)
	})
    return{updateCorrectAnsweredIds,isCorrectAsweredIdsUpdating}
}