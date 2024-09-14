import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

export default function Results() {
	const {category}=useParams()
  const navigate=useNavigate()
  
	return (
		<div>
			<h3 className='text-purple-200 border-y border-purple-200 text-lg pb-1 text-center mt-5'>
				Test success in category <br></br> React - beginner :
			</h3>
			<div className="flex justify-center items-center mt-16">
				<div className='border-4 border-blue-200 rounded-full h-48 w-48'>
					<h1 className="text-blue-200 text-6xl mt-14 ml-10">50%</h1>
				</div>
			</div>
      <div className="flex justify-center items-center mt-16 gap-2">
        <Button onClick={() => navigate(`/${category}/overview`)}
						style={{
							backgroundColor: "rgb(254 240 138)",
							width: "133px",
							height: "40px",
							fontFamily: "kanit",
						}}>Back</Button>
        <Button onClick={() => navigate(`/${category}/test/instructions`)}
						style={{
							backgroundColor: "#88FFB6",
							width: "133px",
							height: "40px",
							fontFamily: "kanit",
						}}>Restart</Button>
      </div>
		</div>
	)
}
