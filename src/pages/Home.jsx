import Button from "../components/Button"
import Logo from "../components/Logo"
import { MdOutlineSchool } from "react-icons/md"

export default function Home() {
	return (
		<div className='h-dvh bg-black'>
			<Logo />
			<div className="text-purple-200 text-9xl flex justify-center my-5">
				<MdOutlineSchool />
			</div>
      <div className="p-3">
        <p className="text-blue-200 text-center">Practice your knowledge in any field!Whether you're a student or self-taught,<br/> write your own questions and answers and rate your performance.</p>
      </div>
      <div className="flex justify-center gap-4 pt-12">
        <Button style={{backgroundColor: "#88FFB6",width:"130px",height:"40px"}}>Login</Button>
        <Button style={{backgroundColor: "#FFF48B",width:"130px",height:"40px"}}>Register</Button>
      </div>
		</div>
	)
}
