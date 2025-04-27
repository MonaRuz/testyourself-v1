import PropTypes from "prop-types"
// export default function Button({ style, children, onClick, type, disabled }) {
// 	return (
// 		<button
// 			disabled={disabled}
// 			className='border-4 border-black hover:border-none'
// 			onClick={onClick}
// 			type={`${type}`}
// 			style={style}
// 		>
// 			{children}
// 		</button>
// 	)
// }

export default function Button({ style, children, onClick, type = "button", disabled }) {
	return (
		<button
			disabled={disabled}
			className='border-4 border-black hover:border-none'
			onClick={onClick}
			type={type}
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
	type: PropTypes.string,
	disabled:PropTypes.bool
}
