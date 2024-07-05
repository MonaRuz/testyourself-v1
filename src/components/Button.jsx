export default function Button({ style, children, onClick }) {
	return (		
			<button className="border-4 border-black hover:border-none" onClick={onClick} style={style}>{children}</button>
		
	)
}
