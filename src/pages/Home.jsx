import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Logo from "../components/Logo"
import { MdOutlineSchool } from "react-icons/md"

export default function Home() {
	const navigate = useNavigate()

	return (
		<div className='h-dvh bg-black px-3'>
			<Logo />
			<div className='text-purple-200 text-9xl flex justify-center my-5'>
				<MdOutlineSchool />
			</div>
			<div>
				<p className='text-blue-200 text-center'>
					Practice your knowledge in any field!Whether you're a student or
					self-taught,
					<br /> write your own questions and answers and rate your performance.
				</p>
			</div>
			<div className='flex justify-center gap-4 mt-28'>
				<Button
					onClick={() => navigate("/login")}
					style={{ backgroundColor: "#88FFB6", width: "130px", height: "40px",fontFamily:"kanit" }}
				>
					Login
				</Button>
				<Button
					onClick={() => navigate("/register")}
					style={{ backgroundColor: "#FFF48B", width: "130px", height: "40px",fontFamily:"kanit" }}
				>
					Register
				</Button>
			</div>
		</div>
	)
}
