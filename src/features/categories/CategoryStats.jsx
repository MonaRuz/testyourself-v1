


export default function CategoryStats() {
	return (
		<div className=' px-2'>
			<div className='border-y border-purple-200'>
				<h3 className='text-purple-200 pb-1'>Category</h3>
				<div className='text-red-200 text-xl'>
				</div>
			</div>
				<table className='table-auto text-sm text-left border-separate border-spacing-x-10 border-spacing-y-1 pb-2 m-auto lg:w-72 border border-yellow-200'>
					<tr>
						<th className='text-blue-200 font-normal'>Questions:</th>
						<th className='text-yellow-200 font-normal'>83</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Progress:</th>
						<th className='text-yellow-200 font-normal'>25 / 83</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Current score:</th>
						<th className='text-yellow-200 font-normal'>50 %</th>
					</tr>
					<tr>
						<th className='text-blue-200 font-normal'>Highscore:</th>
						<th className='text-yellow-200 font-normal'>80 %</th>
					</tr>
				</table>
		</div>
	)
}
