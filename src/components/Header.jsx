import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import User from "../features/authentication/User";

export default function Header() {
  return (
    <div>
        <div>
            <Link to="/">Test Yourself</Link>
            <h2>Test your knowledge!</h2>
        </div>
        <div>
            <User/>
            <Logout/>
        </div>
    </div>
  )
}
