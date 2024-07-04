import Logo from "../components/Logo"
import { MdOutlineSchool } from "react-icons/md"

export default function Home() {
	return (
		<div className='h-dvh bg-black'>
			<Logo />
			<div className="text-purple-200 text-9xl flex justify-center my-5">
				<MdOutlineSchool />
			</div>
      <div className="p-2">
        <p className="text-blue-200 text-center">Practice your knowledge in any field!Whether you're a student or self-taught,<br/> write your own questions and answers and rate your performance.</p>
      </div>
      div
		</div>
	)
}
