import { useNavigate, useParams } from "react-router-dom"
import { useCategory } from "../categories/useCategory"
import { useQuestions } from "../questions/useQuestions"
import Button from "../../components/Button"
import CategoryStats from "./CategoryStats"
import QuestionsList from "../questions/QuestionsList"
import Spinner from "../../components/Spinner"
import toast from "react-hot-toast"

export default function CategoryOverview() {
	const navigate = useNavigate()
	const { categoryId } = useParams()

	const { isLoadingCategory, selectedCategory } = useCategory(categoryId)
	const { isLoadingQuestions, questions } = useQuestions(categoryId)


	function handleStartTest() {
		if (!questions) {
			toast.error("There are no questions. You must add at least 1 question.")
			return
		} else {
			navigate(`/${categoryId}/test`)
		}
	}

	if (isLoadingCategory || isLoadingQuestions)
		return <Spinner>Loading category overview...</Spinner>
		

	return (
		<div>
			<h2 className='text-purple-300 border-b border-purple-300 text-center pb-1 text-lg'>
				{selectedCategory.category}
			</h2>
			<p className='text-blue-200 text-center text-sm py-3 sm:text-base'>
				Start test, add new questions or search in existing questions to edit
				them.
			</p>
			<div className='flex flex-col items-center lg:flex-row justify-center gap-2 lg:m-10'>
				<div className='flex gap-2'>
					<Button
						onClick={handleStartTest}
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
						onClick={() => navigate(`/${categoryId}/new-question`)}
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
						onClick={() => navigate(`/${categoryId}/delete`)}
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
					<CategoryStats
						questions={questions}
						id={categoryId}
						highscore={selectedCategory.highscore}
						categoryName={selectedCategory.category}
					/>
					<QuestionsList questions={questions} categoryId={categoryId} />
				</div>
			</div>
		</div>
	)
}
