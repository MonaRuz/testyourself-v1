import { useQuery } from "@tanstack/react-query"
import { getTestQuestions } from "../../services/apiTest"

export function useTestQuestions(categoryId) {
	const { isLoading: isLoadingTestQuestions, data: testQuestions } = useQuery({
		queryFn: () => getTestQuestions(categoryId),
		queryKey: ["testQuestions", categoryId],
	})
	return { isLoadingTestQuestions, testQuestions }
}
