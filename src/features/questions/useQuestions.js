import { getQuestions } from "../../services/apiQuestions"
import { useQuery } from "@tanstack/react-query"

export function useQuestions(categoryId, uid) {
	const { isLoading: isLoadingQuestions, data: questions } = useQuery({
		queryKey: ["questions", categoryId],
		queryFn: () => {
			if (!categoryId || !uid) return Promise.resolve([])
			return getQuestions(categoryId, uid)
		},

		enabled: !!categoryId && !!uid, // fetch only when both are available
	})
  return{isLoadingQuestions,questions}
}
