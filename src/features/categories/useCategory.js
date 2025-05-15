import { getCategory } from "../../services/apiCategories"
import { useQuery } from "@tanstack/react-query"

export function useCategory(categoryId) {
	const {
		isLoading: isLoadingCategory,
		data: selectedCategory,
		error,
	} = useQuery({
		queryKey: ["category",categoryId],
		queryFn: () => getCategory(categoryId)
	})
	return { isLoadingCategory, selectedCategory, error }
}
