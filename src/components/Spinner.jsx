import { BarLoader } from "react-spinners";
import PropTypes from "prop-types";


export default function Spinner({children="Loading..."}) {
  return (
    <div className="flex flex-col items-center gap-4 mt-10 ">
        <p className="text-pink-200">{children}</p>
        <BarLoader color="#fbcfe8" width="300px"/>
    </div>
  )
}

Spinner.propTypes={
  children:PropTypes.string
}