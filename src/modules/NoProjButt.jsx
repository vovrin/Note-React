import { useContext } from "react";
import { manageNotes } from "../store/notes-store";
export default function NoPorjButt(){
    const {openCreating, projects, isCreating} = useContext(manageNotes)
    return(
        <>
            {projects.length === 0&&!isCreating?<div className="w-full flex justify-center items-center flex-col gap-3">
                <p className="text-base font-medium">Упс, у вас немає нотаток. Бажаєте додати?</p>
                <button onClick={openCreating} className="border-2 font-medium pl-3 pr-3 bg-slate-900 text-white  rounded-lg p-1 cursor-pointer hover:text-slate-900 hover:bg-slate-100 hover:shadow-lg hover:shadow-slate-900/50 border-slate-900 transition-all active:translate-y-0 active:shadow-none hover:-translate-y-1">Додати</button>
            </div>:undefined}
        </>
    )
}