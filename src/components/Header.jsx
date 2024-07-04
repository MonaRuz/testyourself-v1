import Logout from "../features/authentication/Logout";
import User from "../features/authentication/User";
import Logo from "./Logo";

export default function Header() {
  return (
    <div>
        <div>
            <Logo/>
        </div>
        <div>
            <User/>
            <Logout/>
        </div>
    </div>
  )
}
