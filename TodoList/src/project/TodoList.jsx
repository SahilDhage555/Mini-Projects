import { GiCheckMark } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

export const TodoList = ({data, checked, onCheck, onDelete}) => {
    return (
        <li >
            <span className={checked ? "checked" : "unChecked"}>{data}</span>
            <div className="buttons">
              <button className='checkBtn'
              onClick={() => onCheck(data)}>
                <GiCheckMark /> 
              </button>
              <button className='deleteBtn'
               onClick={() => onDelete(data)}>
                <MdDelete />
              </button>
            </div>
        </li>
    )
}