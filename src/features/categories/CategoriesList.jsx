
export default function CategoriesList() {
  return (
    <div>
        <h3 className="text-purple-200 text-center border-y-2 border-purple-200 pb-1 mb-5">Your categories:</h3>
        <ul className="text-yellow-200 text-center sm:grid sm:grid-cols-3 sm:gap-4 md:grid md:grid-cols-4 md:gap-3">
            <li className="bg-zinc-800 my-1 py-2">React - beginner</li>
            <li className="bg-zinc-800 my-1 py-2">React - intermediate</li>
            <li className="bg-zinc-800 my-1 py-2">React - advanced</li>
            <li className="bg-zinc-800 my-1 py-2">React-expert</li>
        </ul>
    </div>
  )
}
