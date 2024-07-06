import { IoIosArrowDown } from "react-icons/io"
//dhort question to preview...

export default function Question() {
	return (
		<div className="flex justify-between border border-yellow-200 my-2 p-2 max-w-xl m-auto">
			<p className='text-blue-200 text-sm'>
				Some question 
			</p>
			<div className="text-green-200">
				<IoIosArrowDown />
			</div>
		</div>
	)
}
