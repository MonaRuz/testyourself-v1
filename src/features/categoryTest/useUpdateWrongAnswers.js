import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateWrongAnswers as updateWrongAnswersApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useUpdateWrongAnswers(categoryId) {
	// console.log(categoryId);
	
	const queryClient = useQueryClient()
	const { isLoading: isWrongAnswersUpdating, mutate: updateWrongAnswers } =
		useMutation({
			mutationFn: (correctAnswers) =>
				updateWrongAnswersApi(categoryId, correctAnswers),
			onSuccess: () => {
				toast.success("Your answer was correct.")
				queryClient.invalidateQueries({
					queryKey: ["category", categoryId],
				})
			},
			onError: (err) => toast.error(err.message),
		})
	return { updateWrongAnswers, isWrongAnswersUpdating }
}