import { Link } from "react-router-dom"

export default function Logo() {
	return (
		<div className='bg-inherit'>
			<Link to='/'>
				<>
					<h1 className='text-yellow-200 text-3xl text-center pt-4 font-[kanit]'>
						Test Yourself
					</h1>
					<h2 className='text-green-200 text-center font-[calligraffitti]'>
						Test your knowledge!
					</h2>
				</>
			</Link>
		</div>
	)
}
