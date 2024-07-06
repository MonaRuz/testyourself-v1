import { MdDelete } from "react-icons/md"

export default function CategoryStats() {
	return (
		<div className='border border-yellow-200 px-2 max-w-lg'>
			<div className='flex justify-between items-center border-b border-purple-200'>
				<h3 className='text-purple-200 py-2'>Category</h3>
				<div className='text-red-200 text-xl'>
					<MdDelete />
				</div>
			</div>
				<table className='table-auto text-sm mt-2 text-left border-separate border-spacing-x-10 border-spacing-y-1 pb-2 m-auto'>
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
