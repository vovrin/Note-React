import { createContext, useContext, useState } from "react";
export const manageNotes = createContext({
    projects:[],
    openCreating:undefined,
    clsCreating:undefined,
    isCreating:undefined,
    createNote:undefined,
    deleteNote:undefined,
    readNote:undefined,
    isReadingNote:undefined
})
export default function Notes_Store({children}){
    const [isCreatingNote, setCreatingNote] = useState(false);
    const [isReadingNote, setReadingNote] = useState(false);
    
    const [projects, addProject] = useState({
        curProject:[],
        projects:[]
    })
    function openCreating(){
        setCreatingNote(true);
    }
    function clsCreating(){
        setCreatingNote(false);
    }
    function createNote(value){
        let id = Math.random()
        addProject((val)=>{
            return{
                ...val,
                projects:[...val.projects, {
                    title:value.title,
                    text:value.text,
                    id:id
                }]
            }
        })
        console.log(projects)
    }
    function deleteNote(valu){
        addProject((val)=>{
            return{
                ...val,
                projects:val.projects.filter((vall)=> vall.id !== valu)
            }
        })
    }
    function readNote(id){
        addProject((val)=>{
            return{
                ...val,
                curProject:val.projects.filter((item)=>item.id == id),
                curProjectIndex:val.projects.find((val, index)=>{
                    if(val.id == id){
                        return index;
                    }
                })
            }
        })
       
        setReadingNote(true)
    }
    function editNote(idd, ntext, ntitle){
        addProject((val)=>{
            return{
                ...val,
                projects:val.projects.map((vall)=>{
                    if(vall.id === idd){
                        return{
                            text:ntext,
                            title:ntitle,
                            id:idd
                        }
                    }else{
                        return vall
                    }
                })
            }
        })
    }
    return(
        <manageNotes.Provider value={{
            projects:projects.projects,
            openCreating:openCreating,
            clsCreating:clsCreating,
            isCreating:isCreatingNote,
            createNote:createNote,
            deleteNote:deleteNote,
            readNote:readNote,
            curProject:projects.curProject,
            isReadingNote:isReadingNote,
            setReadingNote:setReadingNote,
            editNote:editNote
        }}>
            {children}
        </manageNotes.Provider>
    )
}