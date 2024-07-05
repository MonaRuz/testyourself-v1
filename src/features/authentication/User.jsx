import { FaRegUserCircle } from "react-icons/fa"
export default function User() {
	return (
		<div className='text-green-200 flex gap-2'>
			<div className='text-2xl'>
				<FaRegUserCircle />
			</div>
			<p className="font-[kanit]">User</p>
		</div>
	)
}
