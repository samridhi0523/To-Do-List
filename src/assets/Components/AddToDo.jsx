import { useState } from "react"
import styles from './AddToDo.module.css'
import { MdAlarmAdd } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
export default function AddToDo({handleClicks}){

  const [todoName,setToDoname]=useState('')
  const[dueDate,setDueDate]=useState('')

  const handleNameChange=(e)=>{
    setToDoname(e.target.value)
  }
  const handleDateChange=(e)=>{
    setDueDate(e.target.value)

  }


  const handleAddBtn=(event)=>{
    if(todoName==''){
      toast.error("Enter some task!");
      return
    }
   if(dueDate==''){
    toast.error("Enter date!");
    return
   }
   event.preventDefault()
    handleClicks(todoName,dueDate)
    setDueDate('')
    setToDoname('')
    toast.success("Added!");
  }

     return <>
      <form className="container text-center row flex align-items-center" onSubmit={handleAddBtn}>
          <div className="col-6">
            <input className={styles.inputText} type="text" placeholder="Enter some task" onChange={handleNameChange} value={todoName}/>
          </div>
          <div className="col-4">
            <input className={styles.date} type="date" placeholder="Select date" onChange={handleDateChange} value={dueDate}/>
          </div>
          <div className="col-2">
          <button className="btn btn-success" ><MdAlarmAdd /> Add 
          </button>
          <ToastContainer theme="dark" />
          </div>
          </form>
     </>
    
} 
