import { FaRegUserCircle } from "react-icons/fa"
export default function User() {
	return (
		<div className='text-green-200 flex gap-2'>
			<div className='pt-1'>
				<FaRegUserCircle />
			</div>
			<p>user</p>
		</div>
	)
}
