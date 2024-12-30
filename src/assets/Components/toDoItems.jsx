import ToDoItem from "./toDoItem"
export default function toDoItems({todoList,delItem,checkStatus}){
    return (
          <div>
            {
              todoList.map((v,i)=>{
              return <ToDoItem idx={i} key={i} name={v.name} date={v.date} delItem={delItem} status={v.status} checkStatus={checkStatus}></ToDoItem>
              })
            }
      </div>
    )
}