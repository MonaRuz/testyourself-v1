import PropTypes from "prop-types"

export default function Error({errorMessage}) {
  return (
    <div className="bg-black text-red-200 text center p-5 m-5 border border-red-200 text-center max-w-96 m-auto">
        <p>
           {errorMessage}
        </p>
    </div>
  )
}

Error.propTypes={
  errorMessage:PropTypes.string
}