import Button from "../../components/Button"
import CategoryStats from "./CategoryStats"
import Questions from "../questions/QuestionsList"
import { useNavigate } from "react-router-dom"

export default function CategoryOverview() {
	const navigate = useNavigate()
	return (
		<div>
			<h2 className='text-purple-200 border-b border-purple-200 text-center pb-1 text-lg'>
				Category overview
			</h2>
			<p className='text-blue-200 text-center text-sm py-3 sm:text-base'>
				Start test, add new questions or search in existing questions to edit
				them.
			</p>
			<div className='flex flex-col items-center lg:flex-row justify-center'>
				<div className="flex">
					<Button
						onClick={() => navigate("/test/instructions")}
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
						onClick={() => navigate("/category/new-question")}
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
				<div className="flex">
					<Button
						onClick={() => navigate("/dashboard")}
						style={{
							backgroundColor: "rgb(252 165 165)",
							width: "133px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>
						Back
					</Button>
					<Button
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
					<CategoryStats />
					<Questions />
				</div>
			</div>
		</div>
	)
}
