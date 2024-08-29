import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "../../services/apiQuestions";

export function useQuestion(categoryId,questionId){
    const { isLoading: isLoadingQuestion, data: question } = useQuery({
		queryKey: ["question"],
		queryFn: () => getQuestion(categoryId, questionId),
	})
    return{isLoadingQuestion,question}
}