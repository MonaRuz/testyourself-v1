import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function AppLayout() {
  return (
    <div className="bg-black h-dvh px-3 md:px-7">
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
