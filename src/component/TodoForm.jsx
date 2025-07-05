import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";



function TodoForm() {
    const [Todo, setTodo ] = useState("")

    const {addTodo} = useTodo()
    
    // useEffect(()=>{
    //     console.log(Todo)
    // },[Todo])
    
    const Add = (e)=>{
        e.preventDefault()
        if(!Todo) return
        console.log(`form submitted ${Todo}`)
        addTodo({Todo, completed: false})
        setTodo('')

    }
    

    return (
        <form onSubmit={Add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={Todo}
                onChange={(e)=>{setTodo(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

