import { useContext, useState } from "react"
import { manageNotes } from "../store/notes-store"
export default function ReadFullNote(){
    const {curProject, isReadingNote, setReadingNote, porjects} = useContext(manageNotes)
    const [notEditing, setEditing] = useState({
        title:true,
        text:true
    })  
    function startTextEdt(){
        setEditing(()=>{
            return{
                title:true,
                text:true
            }
        })
        console.log("no")
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
                            <textarea disabled = {notEditing.title} className="font-bold text-2xl bg-transparent resize-none">{curProject[0].title}</textarea>
                            <textarea onClick={()=>{console.log("yes")}} disabled = {notEditing.text} className="font-normal text-lg bg-transparent resize-none">{curProject[0].text}</textarea>
                        </div>
        
                    </div>
                </div>
            }
        </>
        
    )
}