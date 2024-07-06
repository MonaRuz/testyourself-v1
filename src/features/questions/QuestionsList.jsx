import Question from "./Question";

export default function QuestionsList() {
  return (
    <div className="w-full">
      <h2 className="text-purple-200 border-y border-purple-200 pb-1 m-3 text-center">Questions in category:</h2>
      <ul>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
      </ul>
    </div>
  )
}
