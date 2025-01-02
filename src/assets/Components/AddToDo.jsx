// import { useState } from "react"
import { useRef } from "react";
import styles from './AddToDo.module.css'
import { MdAlarmAdd } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
export default function AddToDo({handleClicks}){

  // const [todoName,setToDoname]=useState('')
  // const[dueDate,setDueDate]=useState('')

  // const handleNameChange=(e)=>{
  //   setToDoname(e.target.value)
  // }
  // const handleDateChange=(e)=>{
  //   setDueDate(e.target.value)

  // }

 const currName=useRef()
  const currDate=useRef()
  
  const handleAddBtn=(event)=>{
   //  if(todoName==''){
   //    toast.error("Enter some task!");
   //    return
   //  }
   // if(dueDate==''){
   //  toast.error("Enter date!");
   //  return
   // }
    // handleClicks(todoName,dueDate)
    // setDueDate('')
    // setToDoname('')
    // toast.success("Added!");
      const handleAddBtn=(event)=>{
   event.preventDefault()
    if(currName.current.value==''){
      toast.error("Enter some task!");
      return
    }
   if(currDate.current.value==''){
    toast.error("Enter date!");
    return
   }
    const toDoName= currName.current.value
    const dueDate= currDate.current.value
    handleClicks(toDoName,dueDate)
    currDate.current.value=''
    currName.current.value=''
    console.log(toast);
    toast.success("Added!");
  }

     return <>
      <ToastContainer theme="dark"  />
      <form className="container text-center row flex align-items-center" onSubmit={handleAddBtn}>
          <div className="col-6">
            <input className={styles.inputText} type="text" placeholder="Enter some task"
               ref={currName}
{/*               onChange={handleNameChange} value={todoName} */}
              />
          </div>
          <div className="col-4">
            <input className={styles.date} type="date" placeholder="Select date" 
              ref={currDate}
{/*               onChange={handleDateChange} value={dueDate} */}
              />
          </div>
          <div className="col-2">
          <button className="btn btn-success" ><MdAlarmAdd /> Add 
          </button>
          </div>
          </form>
     </>
    
} 
