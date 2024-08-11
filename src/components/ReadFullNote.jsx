import { useContext, useRef, useMemo } from "react"
import { manageNotes } from "../store/notes-store"
export default function ReadFullNote(){
    const {curProject, isReadingNote, setReadingNote, porjects} = useContext(manageNotes);
    const text = useRef();
    const title = useRef();
    useMemo(()=>{console.log(text.current.value)},[text.current.value])
    
    function checkChanges(){
        if (text != curProject[0].text || title != curProject[0].title){

        }
    }

   
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
                            <textarea ref = {title} className="font-bold text-2xl bg-transparent resize-none outline-none">{curProject[0].title}</textarea>
                            
                            <textarea ref = {text} onChange = {checkChanges} className="font-normal text-lg bg-transparent resize-none outline-none">{curProject[0].text}</textarea>
                           
                        </div>
        
                    </div>
                </div>
            }
        </>
        
    )
}