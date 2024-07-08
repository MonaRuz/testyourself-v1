import Searchbar from "../../components/Searchbar";
import Question from "./Question";

export default function QuestionsList() {
  return (
    <div className="w-full lg:max-w-xl">
      <h2 className="text-purple-200 border-y border-purple-200 pb-1 my-3 text-center">Questions in category:</h2>
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
