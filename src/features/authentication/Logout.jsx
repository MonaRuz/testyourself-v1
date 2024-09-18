import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate=useNavigate()
  return (
    <div className="text-red-300 text-3xl">
        <IoMdLogOut onClick={()=>navigate("/")}/>
    </div>
  )
}
