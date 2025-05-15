import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "../components/Button"

ErrorPage.propTypes = {
	children:PropTypes.string
}

export default function ErrorPage({children="Page not found"}) {
	const navigate=useNavigate()
	return (
		<div className='text-red-200 bg-black h-screen'>
			<h1 className='text-red-300 text-center text-2xl py-5 mx-10 border-b border-red-300'>
				Error
			</h1>
			<p className='text-blue-300 text-center mt-10'>{children}</p>
			<div className="flex justify-center mt-10">
				<Button
					onClick={() => navigate("/login")}
					style={{
						color:"black",
						backgroundColor: "rgb(254 240 138)",
						width: "250px",
						height: "40px",
						fontFamily: "kanit",
					}}
				>
					Back
				</Button>
			</div>
		</div>
	)
}


