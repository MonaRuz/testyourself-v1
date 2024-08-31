import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCategory } from "../../services/apiCategories"
import toast from "react-hot-toast"
import useCategory from "./useCategory"
import Spinner from "../../components/Spinner"

export default function DeleteCategory() {
	const queryClient = useQueryClient()
	const param = useParams()
    const navigate=useNavigate()

	const { isLoading, selectedCategory } = useCategory(param.category)

	const { isLoading: isDeleting, mutate } = useMutation({
		mutationFn: (categoryId) => deleteCategory(categoryId),
		onSuccess: () => {
			toast.success("Category was successfully deleted")
			queryClient.invalidateQueries({
				queryKey: ["categories"],
			})
            navigate("/dashboard")
		},
		onError: (err) => toast.error(err.message),
	})
	function handleDeleteCategory(id) {
		mutate(id)
	}

	if (isLoading) return <Spinner>deleting category page</Spinner>

	return (
		<div >
			<div className='m-auto max-w-prose mt-8 border border-red-300 px-3 py-4'>
				<p className='text-red-300 text-center leading-6'>
					Are you sure you want to delete category{" "}
					<span className='text-blue-200'>{selectedCategory?.category}</span>?
					All questions and saved test progress will be deleted forever!
				</p>
			</div>
			<div className='flex  items-center justify-center'>
				<Button
					onClick={() => handleDeleteCategory(selectedCategory?.id)}
					style={{
						backgroundColor: "rgb(252 165 165)",
						width: "150px",
						height: "40px",
						fontFamily: "kanit",
						marginTop: "20px",
					}}
				>
					Delete category
				</Button>
                <Button
            onClick={()=>navigate(-1)}
				style={{
					backgroundColor: "rgb(254 240 138)",
					width: "150px",
					height: "40px",
					fontFamily: "kanit",
                    marginTop:"20px"
				}}
			>
				Back
			</Button>
			</div>
		</div>
	)
}
