// import { collection, getDocs } from "firebase/firestore/lite"
// import db from "../src/firebase/config"
// import { useEffect } from "react"
// import { useState } from "react"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import AppLayout from "./components/AppLayout"
import Login from "./features/authentication/Login"
import Register from "./features/authentication/Register"
import CategoryOverview from "./features/categories/CategoryOverview"
import EditQuestion from "./features/questions/EditQuestion"
import NewQuestion from "./features/questions/NewQuestion"
import Test from "./features/categoryTest/Test"
import NewCategory from "./features/categories/NewCategory"
import Results from "./features/categoryTest/Results"
import TestInstructions from "./features/categoryTest/TestInstructions"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		element: <AppLayout />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/new-category",
				element: <NewCategory />,
			},
			{
				path: "/category",
				children: [
					{
						path:"/category/overview",
						element:<CategoryOverview />
					},
					{
						path: "/category/questionID/edit",
						element: <EditQuestion />,
					},
					{
						path: "/category/new-question",
						element: <NewQuestion />,
					},
				],
			},
			{
				path: "/test",
				children: [
					{
						path: "/test/instructions",
						element: <TestInstructions />,
					},
					{
						path: "/test/category-test",
						element: <Test />,
					},
					{
						path: "/test/results",
						element: <Results />,
					},
				],
			},
		],
	},
])

export default function App() {
	// async function getCategories(db) {
	// 	const categoriesCol = collection(db, "categories")
	// 	const citySnapshot = await getDocs(categoriesCol)
	// 	const categories = citySnapshot.docs.map((doc) => doc.data())
	// 	console.log(categories)
	// 	setCategories(categories)
	// }

	return <RouterProvider router={router} />
}
