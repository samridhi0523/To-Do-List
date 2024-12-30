import styles from './toDoItem.module.css'
import { MdDeleteForever } from "react-icons/md";
import { MdBookmarkRemove } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
export default function toDoItem({name,date,delItem,idx,checkStatus,status}){
    return(
    <div className={`container ${styles['itemList']} ${status ? styles['true'] : ''}`}>
        <div className="row d-flex align-items-center justify-content-between ">
            <div className="col-1">
             <p>{idx+1}.</p>
            </div>
            <div className="col-5">
             <p>{name}</p>
            </div>
            <div className="col-3">
             <p>{date}</p>
            </div>
            <div className="col-3 d-flex justify-content-between">
             <button type="button" className={`btn btn-warning `} onClick={()=>checkStatus(idx)}>{status?<span><MdOutlineBookmarkAdd/> </span>: <span><MdBookmarkRemove/></span>}</button>
             <button type="button" className={`btn btn-danger `} onClick={()=>delItem(idx)}><span><MdDeleteForever/></span></button>
        </div>
        </div>
    </div>
    )
   
}