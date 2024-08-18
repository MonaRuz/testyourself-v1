import { getCategory } from "../../services/apiCategories"
import { useQuery } from "@tanstack/react-query"
 
export default function useCategory(category){
    const{isLoading,data:selectedCategory,error}=useQuery({
        queryKey:["category"],
        queryFn:()=>getCategory(category),
      })
    return{isLoading,selectedCategory,error}
}