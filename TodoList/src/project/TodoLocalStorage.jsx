
const todoKey = "ReactTodo";

export const getLocalStorage = () => {
    const rawTodo = localStorage.getItem(todoKey);
          if(!rawTodo) return [];
        return JSON.parse(rawTodo);
  }


export const setLocalStorage = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task))
  }