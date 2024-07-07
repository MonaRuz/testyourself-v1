export default function NewQuestion() {
  function handleNewQuestion(){
    //new question handling
  }

	return (
		<div>
			<p className="text-blue-200 text-center p-3">
				Create new question for category CATEGORY. All fields must be
				fulfilled.
			</p>
      <div>
        <form onSubmit={handleNewQuestion} >
          <label >
            <textarea className="bg-black"></textarea>
          </label>
          <label>
            <textarea className="bg-black"></textarea>
          </label>
        </form>
      </div>
		</div>
	)
}
