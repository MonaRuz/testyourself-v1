import Button from "../components/Button"
import CategoriesList from "../features/categories/CategoriesList"
export default function Dashboard() {
	return (
		<div>
			<p className='text-blue-200 text-center pt-4 text-sm md:text-lg'>
				Open one of your category or create new category
			</p>
			<div className='flex my-5'>
				<Button
					style={{
						backgroundColor: "#88FFB6",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
						margin: "auto",
					}}
				>
					New category
				</Button>
			</div>
        <CategoriesList/>
		</div>
	)
}
