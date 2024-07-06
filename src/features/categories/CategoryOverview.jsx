import Button from "../../components/Button"
import CategoryStats from "./CategoryStats"
import Questions from "../questions/QuestionsList"

export default function CategoryOverview() {
	return (
		<div>
			<h2 className='text-purple-200 border-b border-purple-200 text-center pb-1 text-lg'>
				Category overview
			</h2>
			<p className='text-blue-200 text-center text-sm py-3 sm:text-base'>
				Start test, add new questions or search in existing questions to edit
				them.
			</p>
			<div className='flex justify-center mb-3'>
				<Button
					style={{
						backgroundColor: "#88FFB6",
						width: "200px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Add questions
				</Button>
			</div>
			<div className='flex flex-col'>
				<div className='flex flex-col items-center lg:flex-row'>
					<div>
						<CategoryStats />
            <Button style={{backgroundColor: "rgb(252 165 165)",
						width: "150px",
						height: "40px",
						fontFamily: "kanit"}}>Delete category</Button>
					</div>
					<Questions />
				</div>
			</div>
		</div>
	)
}
