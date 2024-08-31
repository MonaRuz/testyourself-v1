import { useParams } from "react-router-dom"
import { useQuestions } from "../questions/useQuestions"

export default function TestQuestion({question}) {

  return (
    <div  className="max-w-3xl m-auto">
      <div>
        <h3 className="text-purple-200 text-center border-b border-purple-200 p-2 sm:text-lg">Question:</h3>
        <p className="text-blue-200 text-sm sm:text-base p-2">{question.question}</p>
      </div>
      <div>
        <h3 className="text-purple-200 text-center border-b border-purple-200 p-2 sm:text-lg">Answer:</h3>
        <p className="text-blue-200 text-sm p-2 sm:text-base">{question.answer}</p>
      </div>
    </div>
  )
}
