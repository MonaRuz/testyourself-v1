import {useCategory} from "./useCategory"
import { useDeleteCategory } from "./useDeleteCategory"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import Spinner from "../../components/Spinner"

export default function DeleteCategory() {
	
	const {category} = useParams()
    const navigate=useNavigate()

	const { isLoadingCategory, selectedCategory } = useCategory(category)

    const{deleteCategory}=useDeleteCategory()

	function handleDeleteCategory(id) {
		deleteCategory(id)
	}

	if (isLoadingCategory) return <Spinner>deleting category page</Spinner>

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
