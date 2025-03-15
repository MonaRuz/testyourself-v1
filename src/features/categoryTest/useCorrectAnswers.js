import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCorrectAnswers as updateCorrectAnswersApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useCorrectAnswers(categoryId) {
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

// export function useNewCategory(){
//     const queryClient = useQueryClient()
//     const {mutate:createCategory } = useMutation({
// 		mutationFn: (category)=>createCategoryApi(category),
// 		onSuccess: () => {
// 			toast.success("New category was successfully created")
// 			queryClient.invalidateQueries({
// 				queryKey: ["categories"],
// 			})

// 		},
// 		//debug:
// 		onError: (err) => toast.error(err.message),
// 	})
//     return{createCategory}
// }



// export function useCorrectAnswers({categoryId}) {
	
// 	const queryClient = useQueryClient()
// 	const { isLoading: isCorectAnswersUpdating, mutate: updateCorrectAnswers } =
// 		useMutation({
// 			mutationFn: ({ categoryId, correctAnswers }) =>
// 				updateCorrectAnswersApi(categoryId, correctAnswers),
// 			onSuccess: () => {
// 				toast.success("Your answer was correct.")
// 				queryClient.invalidateQueries({
// 					queryKey: ["category", categoryId],
// 				})
// 			},
// 			onError: (err) => toast.error(err.message),
// 		})
// 	return { updateCorrectAnswers, isCorectAnswersUpdating }
// }