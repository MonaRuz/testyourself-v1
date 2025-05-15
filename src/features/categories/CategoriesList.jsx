import { useNavigate } from "react-router-dom"
// import { getAuth } from "firebase/auth"
import useCategories from "./useCategories"
import Spinner from "../../components/Spinner"
import Error from "../../components/Error"

export default function CategoriesList() {
	const navigate = useNavigate()
	// const auth = getAuth()
	// const user = auth.currentUser
	// const uid = user.uid

	const { isLoading, categories } = useCategories()

	// const categoriesByUid = categories?.filter((category) => {
	// 	return category.uid === uid
	// })

	if (isLoading) return <Spinner>Categories</Spinner>

	if (!categories)
		return <Error errorMessage={"There are no categories to display"} />

	return (
		<div>
			<h3 className='text-purple-200 text-center border-y-2 sm:text-lg border-purple-200 pb-1 mb-5 md:w-96 m-auto lg:my-10'>
				Your categories:
			</h3>
			<ul className='text-yellow-200 text-center sm:grid sm:grid-cols-2 sm:gap-4 md:w-3/4 mx-auto'>
				{categories.map((category) => {
					return (
						<li
							onClick={() => navigate(`/${category.id}/overview`)}
							className='border border-yellow-200 hover:border hover:border-none hover:bg-yellow-200 hover:text-black my-1 py-2'
							key={category.id}
						>
							{category.category}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
