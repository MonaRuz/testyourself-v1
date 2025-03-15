export default function Button({ style, children, onClick,disabled }) {
	return (		
			<button disabled={disabled} className="border-4 border-black hover:border-none" onClick={onClick} style={style}>{children}</button>
		
	)
}
