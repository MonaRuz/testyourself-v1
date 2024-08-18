
import Searchbar from "../../components/Searchbar";
import { getQuestions } from "../../services/apiQuestions";
import Question from "./Question";
import { useQuery } from "@tanstack/react-query";

export default function QuestionsList({selectedCategory}) {
  
  const{isLoading,data:questions,error}=useQuery({
    queryKey:["questions"],
    queryFn:()=>getQuestions(selectedCategory.id)
  })
  // console.log(questions);
  
  return (
    <div className="w-full lg:max-w-xl">
      <h2 className="text-purple-200 border-y border-purple-200 pb-1 mt-3 mb-2 text-center">Questions in category:</h2>
      <Searchbar/>
      <ul>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
      </ul>
    </div>
  )
}
