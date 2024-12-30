import AppName from "./assets/Components/AppName"
import AddToDo from "./assets/Components/AddToDo"
import ToDoItems from "./assets/Components/toDoItems"
import WelcomeMess from "./assets/Components/WelcomeMess"
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react"
function App() {
  let[todoList,setToDo]=useState([])
  let [status,setStatus]=useState(false)
  let checkStatus=(index)=>{
    
    const updatedList = todoList.map((item, idx) =>
      idx === index ? { ...item, status: !item.status } : item
    );
    console.log(updatedList);
    setToDo(updatedList); 
  }
  const handleclicks=(name,date)=>{
    setToDo([...todoList,
      {
        name:name,
        date:date,
        status:false
      }
    ]
    )
    // console.log(todoList);
    
  }
  const delItem=(todoIdx)=>{
    const userResponse = window.confirm("Are you sure to delete?");
    if (userResponse) {
    const deletedItem = todoList[todoIdx]
    const newtoDo=todoList.filter((item,index)=>index!==todoIdx)
    toast.success(`${deletedItem.name} deleted`)
    // console.log(todoList);
    setToDo(newtoDo)
  }
 
  }

  return (
    <center className='todo-container'>
      <AppName/>
      <AddToDo handleClicks={handleclicks} />
      {todoList.length==0 && <WelcomeMess></WelcomeMess>}
      <ToDoItems todoList={todoList} delItem={delItem} checkStatus={checkStatus}/> <ToastContainer theme="dark"/>
    </center>
  )
}

export default App
