import { useState } from "react";

export const TodoForm= ({onAddTodo}) => {
    const [input,setInput] = useState({});

    const handleInput = (value) => {
        setInput({id: value, content: value, checked: false})
    }

    const formSubmit = (e) => {
        e.preventDefault();
        onAddTodo(input)
        setInput({id:"", content:"", checked:false})
    }

  return (
    <div className="form">
        <form onSubmit={formSubmit}>
            <input 
            type="text"
            placeholder='Enter List '
            value={input.content}
            onChange={(e) => handleInput(e.target.value)} 
            />
            <button type='submit'
             className='addBtn'
              > Add</button>
        </form>
      </div>
  )
}
