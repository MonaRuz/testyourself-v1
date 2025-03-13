import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateCorrectAnsweredIds as updateCorrectAnsweredIdsAPI } from "../../services/apiTest"

export function useCorrectAnsweredIds(categoryId){
    const queryClient=useQueryClient()
    const{isLoading:isCorrectAsweredIdsUpdating,mutate:updateCorrectAnsweredIds}=useMutation({
		mutationFn:({categoryId,correctAnsweredIds})=>updateCorrectAnsweredIdsAPI(categoryId,correctAnsweredIds),
		onSuccess:()=>{
			toast.success("Your answer can not be saved")
			queryClient.invalidateQueries({
				queryKey:["category",categoryId]
			})
		},
		onError:(err)=>toast.error(err.message)
	})
    return{updateCorrectAnsweredIds,isCorrectAsweredIdsUpdating}
}