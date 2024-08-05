import { useContext } from "react"
import { manageNotes } from "../store/notes-store"
export default function ReadFullNote(){
    const {curProject, isReadingNote, setReadingNote} = useContext(manageNotes)
    const tex = `<- назад`
    return(
        <>
            {isReadingNote&&
                <div className="fixed left-0 top-0 w-full h-full bg-slate-900 z-10 ">
                    <div className="max-w-6xl ml-auto mr-auto">
                        <nav className="w-full text-white border-b bg-slate-700/30">
                            <button onClick={()=>setReadingNote(false)} className="p-2  hover:bg-slate-900">{tex}</button>
                        </nav>
                        <div className="w-full text-white p-3 flex flex-col gap-3">
                            <p className="font-bold text-2xl">{curProject[0].title}</p>
                            <textarea disabled className="font-normal text-lg bg-slate-900 disabled resize-none">{curProject[0].text}</textarea>
                        </div>
        
                    </div>
                </div>
            }
        </>
        
    )
}