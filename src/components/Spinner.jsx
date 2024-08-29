import { BarLoader } from "react-spinners";


export default function Spinner({children}) {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
        <p className="text-pink-200">Loading {children}...</p>
        <BarLoader color="#fbcfe8" width="300px"/>
    </div>
  )
}
