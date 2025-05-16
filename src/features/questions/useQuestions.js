import { useQuery } from "@tanstack/react-query"
import { getQuestions } from "../../services/apiQuestions"
import { useAuth } from "../authentication/contexts/AuthContext"

export function useQuestions(categoryId) {
	const { user, isLoadingUser } = useAuth()
console.log(user?.uid);

	const {
		data: questions,
		isLoading:isLoadingQuestions,
		isError,
		error,
	} = useQuery({
		queryKey: ["questions", categoryId, user?.uid],
		queryFn: () => getQuestions(categoryId, user.uid),
		enabled: !!user?.uid && !!categoryId && !isLoadingUser,
	})

	return { questions, isLoadingQuestions, isError, error }
}
