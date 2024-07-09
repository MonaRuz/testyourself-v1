import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
export default function TestButtons() {
  const navigate=useNavigate()
	return (
		<div className="flex flex-col justify-center items-center gap-1">
			<div className=" mt-5">
				{/* <div className="flex flex-col justify-center gap-3">
					<Button

						style={{
							backgroundColor: "rgb(254 240 138)",
							width: "300px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>Display correct answer</Button>
				</div> */}
				<div className="flex gap-1 justify-center items-center">
					<Button

						style={{
							backgroundColor: "rgb(252 165 165)",
							width: "148px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>Wrong</Button>
					<Button

						style={{
							backgroundColor: "#88FFB6",
							width: "148px",
							height: "40px",
							fontFamily: "kanit",
						}}
					>Correct</Button>
				</div>
			</div>
			<div>
				<Button
          onClick={()=>navigate("/category/test/instructions")}
					style={{
						backgroundColor: "rgb(254 240 138)",
						width: "300px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>Back</Button>
			</div>
		</div>
	)
}
