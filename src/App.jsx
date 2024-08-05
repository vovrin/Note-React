import CreateNote from "./components/CreateNote"
import Notes_Store from "./store/notes-store"
import CreateNoteBtn from "./modules/CreateNoteBtn"
import Notes from "./components/Notes"
import ReadFullNote from "./components/ReadFullNote"

function App() {
  return (
    <Notes_Store>
      <div className="max-w-6xl m-auto pl-4 pr-4">
        <ReadFullNote></ReadFullNote>
        <CreateNoteBtn></CreateNoteBtn>
        <CreateNote></CreateNote>
        <Notes></Notes>
      </div>
    </Notes_Store>
  )
}

export default App
