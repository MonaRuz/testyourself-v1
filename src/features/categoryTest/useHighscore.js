import { useMutation, useQueryClient } from "@tanstack/react-query"
import { setHighscore as setHighscoreApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export default function useHighscore(category){
    const queryClient=useQueryClient()
    const {mutate:setHighscore}=useMutation({
        mutationFn:({selectedCategoryId,percentage})=>setHighscoreApi(selectedCategoryId,percentage),
        onSuccess:()=>{
            toast.success("Your highscore was saved")
            queryClient.invalidateQueries({
                queryKey:["category",category]
            })
        },
        onError:(err)=>toast.error(err.message)
      })
      return{setHighscore}
}