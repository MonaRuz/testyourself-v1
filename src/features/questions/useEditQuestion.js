import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editQuestion as editQuestionApi } from "../../services/apiQuestions"
import toast from "react-hot-toast"


export function useEditQuestion(){
    const queryClient=useQueryClient()
    const{isLoading:isEditing,mutate:editQuestion}=useMutation({
        mutationFn:editQuestionApi,
        onSuccess:()=>{
            toast.success("Question was successfully edited.")
            queryClient.invalidateQueries({
                queryKey:["questions"]
            })
        },
        onError:(err)=>toast.error(err.message)
      })
      return{isEditing,editQuestion}
}