import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
        id: Date.now(),
        text: 'Todo msg',
        completed: false
    }
],
addTodo: ()=>{},
updateTodo: (id, text)=>{},
deleteTodo: (id)=>{},
toggleTodo: (id)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider