import { useCategory } from "../categories/useCategory"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import CategoryStats from "./CategoryStats"
import QuestionsList from "../questions/QuestionsList"
import Spinner from "../../components/Spinner"

export default function CategoryOverview() {
	const navigate = useNavigate()
	const { category } = useParams()

	const { isLoadingCategory, selectedCategory } = useCategory(category)

	if (isLoadingCategory) return <Spinner>Category overview</Spinner>

	return (
		<div>
			<h2 className='text-purple-300 border-b border-purple-300 text-center pb-1 text-lg'>
				{category}
			</h2>
			<p className='text-blue-200 text-center text-sm py-3 sm:text-base'>
				Start test, add new questions or search in existing questions to edit
				them.
			</p>
			<div className='flex flex-col items-center lg:flex-row justify-center gap-2 lg:m-10'>
				<div className='flex gap-2'>
					<Button
						onClick={() => navigate(`/${category}/test/instructions`)}
						style={{
							backgroundColor: "#88FFB6",
							width: "133px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>
						Run test
					</Button>
					<Button
						onClick={() => navigate(`/${category}/new-question`)}
						style={{
							backgroundColor: "#88FFB6",
							width: "133px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>
						Add questions
					</Button>
				</div>
				<div className='flex gap-2'>
					<Button
						onClick={() => navigate("/dashboard")}
						style={{
							backgroundColor: "rgb(254 240 138)",
							width: "133px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>
						Back
					</Button>
					<Button
						onClick={() => navigate(`/${selectedCategory.category}/delete`)}
						style={{
							backgroundColor: "rgb(252 165 165)",
							width: "133px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>
						Delete category
					</Button>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='flex flex-col items-center lg:flex-row lg:justify-center lg:gap-5 lg:items-start'>
					<CategoryStats selectedCategory={selectedCategory} />
					<QuestionsList selectedCategory={selectedCategory} />
				</div>
			</div>
		</div>
	)
}
