import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCategory as createCategoryApi } from "../../services/apiCategories"
import toast from "react-hot-toast"

export function useNewCategory(){
    const queryClient = useQueryClient()
    const {mutate:createCategory } = useMutation({
		mutationFn: (category)=>createCategoryApi(category),
		onSuccess: () => {
			toast.success("New category was successfully created")
			queryClient.invalidateQueries({
				queryKey: ["categories"],
			})
			
		},
		//debug:
		onError: (err) => toast.error(err.message),
	})
    return{createCategory}
}