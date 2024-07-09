import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
export default function TestInstructions() {
  const navigate=useNavigate()
	return (
		<div>
			<h3 className='text-purple-200 border-y border-purple-200 my-4 pb-1 text-center'>
				Run test in CATEGORY
			</h3>
			<div className='flex flex-col items-center'>
				<Button
					style={{
						backgroundColor: "#88FFB6",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Run test
				</Button>
				<Button
        onClick={()=>navigate("/category/test/run")}
					style={{
						backgroundColor: "rgb(252 165 165)",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Restart test
				</Button>
				<Button
        onClick={()=>navigate("/category/overview")}
					style={{
						backgroundColor: "rgb(254 240 138)",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Back
				</Button>
			</div>
		</div>
	)
}
