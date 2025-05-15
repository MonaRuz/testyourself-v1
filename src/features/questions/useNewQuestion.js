import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createQuestion as createQuestionApi }  from "../../services/apiQuestions"
import toast from "react-hot-toast"
 
export function useNewQuestion(selectedCategoryId){
    const queryClient=useQueryClient()
    const{mutate:createQuestion,isLoading:isCreating}=useMutation({
		mutationFn:createQuestionApi,
		onSuccess:()=>{
			toast.success("Question was successfully created.")
			queryClient.invalidateQueries({
				queryKey:["category",selectedCategoryId ,"questions"]
			})
		},
		onError:(err)=>toast.error(err.message)
	})
    return{createQuestion,isCreating}
}