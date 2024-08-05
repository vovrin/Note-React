import {createPortal} from 'react-dom'
import { useContext, useRef, useState } from 'react'
import { manageNotes } from '../store/notes-store'
import AlertPop from '../modules/AlertPop';
export default function CreateNote(){
    const {isCreating, clsCreating, createNote} = useContext(manageNotes);
    const [isError, setError] = useState(false);
    const title = useRef()
    const text = useRef()
    function handleSubmit(event){
        event.preventDefault();
        walidation();
    }
    function walidation(){
        if(text.current.value.length<10||title.current.value.length<10){
            setError(true)
            setTimeout(()=>setError(false), 3000)
        }else{
            formingData();
            clsCreating();
        }
    }
    function formingData(){
        const formated = {
            title:title.current.value,
            text:text.current.value
        }
        createNote(formated)
    } 
    return createPortal(
        <>
            {isCreating&&
            <>
           
            <div className='fixed w-full h-full bg-slate-950/50 backdrop-blur-sm flex justify-center items-center'>
            {isError&&<AlertPop iscr = {isCreating}></AlertPop>}
                <div className='p-5 w-11/12 h-5/6 bg-slate-900 border border-slate-100/50 rounded-md flex justify-center items-center text-white relative'>
                    <div className='clsBtn' onClick={clsCreating}></div>
                    <form action="" onSubmit={handleSubmit} className='flex flex-col gap-10 w-11/12 h-full pt-16'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Опис нотатки:</label>
                            <input ref={title} type="text" className='outline-none focus:bg-slate-800 transition-all bg-slate-800/50 rounded-sm h-10 pl-3'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Текст нотатки:</label>
                            <textarea ref={text} type="text" className='outline-none focus:border-b-2 focus:bg-slate-800 transition-all bg-slate-800/50 rounded-sm p-1 h-40 resize-none'/>
                        </div>
                        <button className='border-2 font-medium border-slate-100 rounded-lg p-1 cursor-pointer hover:text-slate-900 hover:shadow-md hover:shadow-slate-100/30 active:shadow-none active:translate-y-0 hover:bg-slate-100 transition-all hover:-translate-y-1'>Створити</button>
                    </form>
                </div>
            </div>
            </>
            }
        </>
        ,
        document.getElementById("portal")
    )
}