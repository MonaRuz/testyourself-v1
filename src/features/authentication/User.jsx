import { FaRegUserCircle } from "react-icons/fa"
import { getAuth } from "firebase/auth"

export default function User() {
	const auth = getAuth()
	const user = auth.currentUser

	return (
		<div className='text-green-200 flex gap-2 '>
			<div className='text-2xl'>
				<FaRegUserCircle />
			</div>
			<p className='font-[kanit]'>{user.email}</p>
		</div>
	)
}
