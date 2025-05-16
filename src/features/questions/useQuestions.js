import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "../services/apiQuestions"
import { useAuth } from "../contexts/AuthContext"

export function useQuestions(categoryId) {
	const { user, loading } = useAuth()

	const {
		data: questions,
		isLoading:isLoadingQuestions,
		isError,
		error,
	} = useQuery({
		queryKey: ["questions", categoryId, user?.uid],
		queryFn: () => getQuestions(categoryId, user.uid),
		enabled: !!user?.uid && !!categoryId && !loading,
	})

	return { questions, isLoadingQuestions, isError, error }
}
