import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <div className="bg-black min-h-screen px-3 sm:px-7 flex flex-col">
      <Header/>
      <main className="grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
