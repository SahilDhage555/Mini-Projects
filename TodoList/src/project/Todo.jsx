import React, { useState } from "react";
import "./Todo.css";
import Header from "./Header";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getLocalStorage, setLocalStorage } from "./TodoLocalStorage";

function Todo() {
  const [task, setTask] = useState(() => getLocalStorage());

  const formSubmit = (input) => {
    const { id, content, checked } = input;
    if (!content) return;

    // if(task.includes(input)) return;
    const ifContentMatched = task.find((curTask) => curTask === content);
    if (ifContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  setLocalStorage(task);

  const onDelete = (value) => {
    const updated = task.filter((curTask) => curTask.content !== value);
    setTask(updated);
  };
  const clear = () => {
    setTask([]);
  };

  const onCheck = (content) => {
    const updated = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updated);
  };

  return (
    <div className="main">
      <Header />
      <TodoForm onAddTodo={formSubmit} />
      <div className="list">
        <ul className="itemList">
          {task.map((curEle) => {
            return (
              <TodoList
                data={curEle.content}
                checked={curEle.checked}
                onDelete={onDelete}
                onCheck={onCheck}
              />
            );
          })}
        </ul>
      </div>
      <div className="clearBtn">
        <button onClick={clear}>Clear All</button>
      </div>
    </div>
  );
}

export default Todo;
