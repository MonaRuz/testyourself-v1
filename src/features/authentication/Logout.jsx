import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../authentication/contexts/AuthContext"

export default function Logout() {
  const{currentUser}=useAuth()
  const navigate=useNavigate()
  return (
    <div className="text-red-300 text-3xl hover:text-red-500 hover:cursor-pointer">
        <IoMdLogOut onClick={()=>navigate("/")}/>
    </div>
  )
}
