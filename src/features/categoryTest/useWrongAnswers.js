import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateWrongAnswers as updateWrongAnswersApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export function useWrongAnswers(categoryId){
    const queryClient=useQueryClient()
    const{isLoading:isWrongAnswersUpdating,mutate:updateWrongAnswers}=useMutation({
		mutationFn:(wrongAnswers)=>updateWrongAnswersApi(categoryId,wrongAnswers),
		onSuccess:()=>{
			toast.success("Your answer was not correct.")
			queryClient.invalidateQueries({
				queryKey:["category",categoryId]
			})
		},
		onError:(err)=>toast.error(err.message)
	})
    return{updateWrongAnswers,isWrongAnswersUpdating}
}

// export function useCorrectAnswers(categoryId) {
// 	// console.log(categoryId);
	
// 	const queryClient = useQueryClient()
// 	const { isLoading: isCorectAnswersUpdating, mutate: updateCorrectAnswers } =
// 		useMutation({
// 			mutationFn: (correctAnswers) =>
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