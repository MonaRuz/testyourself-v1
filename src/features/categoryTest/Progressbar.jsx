import { useParams } from "react-router-dom"
import PropTypes from "prop-types"

export default function Progressbar({
	allCategoryQuestions,
	progress,
	percentage,
}) {
	const { category } = useParams()
	if (isNaN(progress)) progress = 0
	if (isNaN(percentage)) percentage = 0

	return (
		<div className='bg-zinc-800 mt-3 px-4 py-2 max-w-xl m-auto'>
			<h3 className='text-yellow-200 text-center sm:text-lg'>
				Test in category {category}
			</h3>
			<div className='text-green-200 flex items-center justify-between'>
				<p>
					Progress: {progress} / {allCategoryQuestions}
				</p>
				<p>Current score: {percentage>=0?percentage:0} %</p>
			</div>
		</div>
	)
}

Progressbar.propTypes={
	allCategoryQuestions:PropTypes.number,
	progress:PropTypes.number,
	percentage:PropTypes.number
}
