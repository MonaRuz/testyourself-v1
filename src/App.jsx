

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
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
import { Toaster } from "react-hot-toast"

export default function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 0,
			},
		},
	})
	


	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='login'
						element={<Login />}
					/>
					<Route
						path='register'
						element={<Register />}
					/>
					<Route element={<AppLayout />}>
						<Route
							path='dashboard'
							element={<Dashboard />}
						/>
						<Route
							path='new-category'
							element={<NewCategory />}
						/>
						<Route path=':category'>
							<Route
								path='overview'
								element={<CategoryOverview />}
							/>
							<Route
								path=':questionID/edit'
								element={<EditQuestion />}
							/>
							<Route
								path='new-question'
								element={<NewQuestion />}
							/>
							<Route path='test'>
								<Route
									path='instructions'
									element={<TestInstructions />}
								/>
								<Route
									path='running-test'
									element={<Test />}
								/>
								<Route
									path='results'
									element={<Results />}
								/>
							</Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
			<Toaster position="top-center" gutter={12} containerStyle={{margin:"18px"}} toastOptions={{
				success:{
					duration:3000,
				},style:{fontSize:"16px",maxWidth:"500px",padding:"16px 24px",backgroundColor:"black",color:"green"}
			}}/>
		</QueryClientProvider>
	)
}
