import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteQuestion as deleteQuestionApi } from "../../services/apiQuestions"
import toast from "react-hot-toast"


export function useDeleteQuestion(){
    const queryClient = useQueryClient()

    const { mutate:deleteQuestion } =useMutation({
		mutationFn: ({ categoryId, questionId }) =>
			deleteQuestionApi(categoryId, questionId),
		onSuccess: () => {
			toast.success("Question was successfully deleted.")
			queryClient.invalidateQueries({ queryKey: ["questions"] })
		},
		onError: (err) => toast.error(err.message),
	})
    return{deleteQuestion}
}