import Logout from "./Logout";
import User from "./User";

export default function Header() {
  return (
    <div>
        <div>
            <h1>Test Yourself</h1>
            <h2>Test your knowledge!</h2>
        </div>
        <div>
            <User/>
            <Logout/>
        </div>
    </div>
  )
}
