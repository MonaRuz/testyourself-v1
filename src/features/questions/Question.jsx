import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDeleteQuestion } from "./useDeleteQuestion"

export default function Question({ question, selectedCategory }) {
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()
	
	const{deleteQuestion}=useDeleteQuestion()

	function handleOpen() {
		setIsOpen(!isOpen)
	}

	function handleDeleteQuestion(id) {
		deleteQuestion({categoryId:selectedCategory.id,questionId: id})
	}
	

	return (
		<div
			onClick={handleOpen}
			className='flex flex-col justify-between  bg-zinc-900 mb-3 divide-y divide-yellow-200'
		>
			<div className='flex justify-between text-wrap'>
				<p
					className={`text-green-200 text-sm hover:text-purple-300 cursor-pointer pointer-events-auto hover:border-green-200 min-w-50 px-4 py-2 
				 ${!isOpen ? "truncate" : ""}`}
				>
					{question?.question}
				</p>
				<div className='text-yellow-200 p-3'>
					{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</div>
			</div>
			{isOpen && (
				<div>
					<p
						className='text-blue-200 text-sm px-4 py-2 cursor-pointer'
						onClick={handleOpen}
					>
						{question?.answer}
					</p>
					<div className='flex justify-center gap-4 mb-3'>
						<button
							onClick={() => navigate(`/${selectedCategory?.category}/${question.id}/edit`)}
							className="text-zinc-900 bg-green-200 w-20 py-1 border-2 border-zinc-900 hover:border-none font-['kanit']"
						>
							Edit
						</button>
						<button
							onClick={() => handleDeleteQuestion(question.id)}
							className="text-zinc-900 bg-red-300 w-20 py-1 border-2 border-zinc-900 hover:border-none font-['kanit']"
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
