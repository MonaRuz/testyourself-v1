// import { collection, getDocs } from "firebase/firestore/lite"
// import db from "../src/firebase/config"
// import { useEffect } from "react"
// import { useState } from "react"

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const router=createBrowserRouter([
	{
		path:"/",
		element:<Home/>
	},
	{
		path:"/dashboard",
		element:<Dashboard/>
	}
])


export default function App() {

	// async function getCategories(db) {
	// 	const categoriesCol = collection(db, "categories")
	// 	const citySnapshot = await getDocs(categoriesCol)
	// 	const categories = citySnapshot.docs.map((doc) => doc.data())
	// 	console.log(categories)
	// 	setCategories(categories)
	// }

	return <RouterProvider router={router}/>
}