import PropTypes from "prop-types"
export default function Button({ style, children, onClick }) {
	return (
		<button
			className='border-4 border-black hover:border-none'
			onClick={onClick}
			style={style}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	style: PropTypes.object,
	children: PropTypes.string,
	onClick: PropTypes.func,
}
