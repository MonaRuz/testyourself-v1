export default function Button({ style, children, onClick }) {
	return (		
			<button onClick={onClick} style={style}>{children}</button>
		
	)
}
