export default function CategoryStats({selectedCategory}) {
	const{id,highscore,currentScore,progress,questionsAmount,category}=selectedCategory
	
	return (
		<div className='mt-[13px] px-2'>
			<h3 className='text-purple-200 border-y border-purple-200 pb-1 mb-5 text-center'>
				Category statistics
			</h3>
			<table className='table-auto text-sm text-left border-separate border-spacing-x-10 border-spacing-y-1 pb-2 m-auto lg:w-72 border border-yellow-200'>
				<tbody>
					<tr>
						<th className='text-blue-200 font-normal'>Questions:</th>
						<th className='text-yellow-200 font-normal'>{questionsAmount}</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Progress:</th>
						<th className='text-yellow-200 font-normal'>{progress} / {questionsAmount}</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Current score:</th>
						<th className='text-yellow-200 font-normal'>{currentScore} %</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Highscore:</th>
						<th className='text-yellow-200 font-normal'>{highscore} %</th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
