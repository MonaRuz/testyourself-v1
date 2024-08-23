
//short question to preview...

import { useNavigate } from "react-router-dom"

export default function Question({question,selectedCategory}) {
	const navigate=useNavigate()
	console.log(selectedCategory);
	
	return (
		<div onClick={()=>navigate(`/${selectedCategory.category}/${question.id}/edit`)} className="flex justify-between border border-yellow-200 my-2 px-4 py-2 max-w-xl m-auto pointer-events-auto hover:border-green-200">
			<p className='text-blue-200 text-sm truncate hover:text-green-200 cursor-pointer'>
				{question.question}
			</p>
		</div>
	)
}
