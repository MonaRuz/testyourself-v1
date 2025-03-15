import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateHighscore as updateHighscoreApi } from "../../services/apiTest"
import toast from "react-hot-toast"

export default function useHighscore(category){
    const queryClient=useQueryClient()
    const {mutate:updateHighscore}=useMutation({
        mutationFn:({selectedCategoryId,percentage})=>updateHighscoreApi(selectedCategoryId,percentage),
        onSuccess:()=>{
            toast.success("Your highscore was saved")
            queryClient.invalidateQueries({
                queryKey:["category",category]
            })
        },
        onError:(err)=>toast.error(err.message)
      })
      return{updateHighscore}
}