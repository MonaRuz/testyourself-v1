import { FaRegUserCircle } from "react-icons/fa"
import { useAuth } from "./contexts/AuthContext"

export default function User() {
const{user}=useAuth()
	const userName = user?.email.substring(0, user.email.indexOf("@"))

	return (
		<div className='text-green-200 flex gap-2 '>
			<div className='text-2xl'>
				<FaRegUserCircle />
			</div>
			<p className='font-[kanit]'>{userName}</p>
		</div>
	)
}
