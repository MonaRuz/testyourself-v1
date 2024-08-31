import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCategory as deleteCategoryApi } from "../../services/apiCategories"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function useDeleteCategory(){
    const queryClient = useQueryClient()
    const navigate=useNavigate()
    const { mutate:deleteCategory } = useMutation({
		mutationFn: (categoryId) => deleteCategoryApi(categoryId),
		onSuccess: () => {
			toast.success("Category was successfully deleted")
			queryClient.invalidateQueries({
				queryKey: ["categories"],
			})
            navigate("/dashboard")
		},
		onError: (err) => toast.error(err.message),
	})
	return{deleteCategory}
}