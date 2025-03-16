import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCorrectAnswers as updateCorrectAnswersApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useUpdateCorrectAnswers(categoryId) {
	// console.log(categoryId);
	
	const queryClient = useQueryClient()
	const { isLoading: isCorectAnswersUpdating, mutate: updateCorrectAnswers } =
		useMutation({
			mutationFn: (correctAnswers) =>
				updateCorrectAnswersApi(categoryId, correctAnswers),
			onSuccess: () => {
				toast.success("Your answer was correct.")
				queryClient.invalidateQueries({
					queryKey: ["category", categoryId],
				})
			},
			onError: (err) => toast.error(err.message),
		})
	return { updateCorrectAnswers, isCorectAnswersUpdating }
}

