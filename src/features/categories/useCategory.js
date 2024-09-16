import { getCategory } from "../../services/apiCategories"
import { useQuery } from "@tanstack/react-query"

export function useCategory(category) {
	const {
		isLoading: isLoadingCategory,
		data: selectedCategory,
		error,
	} = useQuery({
		queryKey: ["category",category],
		queryFn: () => getCategory(category)
	})
	return { isLoadingCategory, selectedCategory, error }
}
