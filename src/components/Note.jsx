import { manageNotes } from "../store/notes-store";
import { useContext } from "react";
export default function Note({text, title, idd}){
    const {deleteNote, readNote} = useContext(manageNotes)
    return(
        <div className="p-4 w-full min-h-28 bg-slate-900 rounded-lg">
            <div className="text-slate-100 mb-3 flex flex-col gap-1 w-full text-pretty">
                <span className="text-xl text-pretty">{title}</span>
                <p className="text-base">{text}</p>
            </div>
            <div className="text-slate-100 text-base font-medium flex justify-between">
                <button onClick={()=>readNote(idd)} className="border-2 border-slate-100 rounded-lg p-1 cursor-pointer hover:text-slate-900 hover:bg-slate-100 transition-all hover:shadow-md hover:shadow-slate-100/50 active:shadow-none active:translate-y-0 hover:-translate-y-1">Редагувати</button>
                <button onClick={()=>deleteNote(idd)}  className="border-2 border-slate-100 rounded-lg p-1 cursor-pointer hover:text-slate-900 hover:shadow-md hover:shadow-slate-100/50 active:shadow-none active:translate-y-0 hover:bg-slate-100 transition-all hover:-translate-y-1">Видалити</button>
            </div>
        </div>
    )
}