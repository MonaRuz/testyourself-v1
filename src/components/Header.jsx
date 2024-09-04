import Logout from "../features/authentication/Logout";
import User from "../features/authentication/User";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between border-b border-purple-300">
        <div className="mb-5">
            <Logo/>
        </div>
        <div className="flex flex-row items-center gap-10 pb-5 md:pb-0">
            <User/>
            <Logout/>
        </div>
    </div>
  )
}
