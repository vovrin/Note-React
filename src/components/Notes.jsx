import { manageNotes } from "../store/notes-store";
import { useContext } from "react";
import Note from "./Note";
import NoPorjButt from "../modules/NoProjButt";
export default function Notes(){
    const {projects} = useContext(manageNotes)
    return(
        <div className="flex flex-col gap-3 pt-3">
            <NoPorjButt></NoPorjButt>
            {projects.map((val)=><Note key={val.id} idd = {val.id} text = {val.text} title = {val.title}/>)}
        </div>
    )
}