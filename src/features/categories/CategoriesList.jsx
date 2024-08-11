import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { getCategories } from "../../services/apiCategories"

export default function CategoriesList() {
    const navigate=useNavigate()
    const{isLoading,data:categories,error}=useQuery({
      queryKey:["categories"],
      queryFn:getCategories,
    })

console.log(categories);

    
  return (
    <div>
        <h3 className="text-purple-200 text-center border-y-2 sm:text-lg border-purple-200 pb-1 mb-5 md:w-96 m-auto lg:my-10">Your categories:</h3>
        <ul className="text-yellow-200 text-center sm:grid sm:grid-cols-2 sm:gap-4 md:w-3/4 mx-auto">
            <li onClick={()=>navigate("/category/overview")} className="border border-yellow-200 hover:border hover:border-none hover:bg-yellow-200 hover:text-black my-1 py-2">React - beginner</li>
            <li onClick={()=>navigate("/category/overview")} className="border border-yellow-200 hover:border hover:border-none hover:bg-yellow-200 hover:text-black my-1 py-2">React - intermediate</li>
            <li onClick={()=>navigate("/category/overview")} className="border border-yellow-200 hover:border hover:border-none hover:bg-yellow-200 hover:text-black my-1 py-2">React - advanced</li>
            <li onClick={()=>navigate("/category/overview")} className="border border-yellow-200 hover:border hover:border-none hover:bg-yellow-200 hover:text-black my-1 py-2">React-expert</li>
        </ul>
    </div>
  )
}
