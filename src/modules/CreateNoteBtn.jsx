import { useContext } from "react"
import { manageNotes } from "../store/notes-store"
export default function CreateNoteBtn(){
    const {openCreating, isCreating} = useContext(manageNotes);
    return(
        <>
            {!isCreating&&<button onClick={openCreating} className="rounded-full fixed bottom-5 right-5 bg-slate-900 w-16 h-16 flex text-white font-extrabold text-xl active:shadow-inner active:shadow-slate-900/40 hover:text-slate-900 hover:bg-slate-100 border-2 transition-all border-slate-900 justify-center items-center">+</button>}
        </>
        
    )
}