import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";



function TodoForm() {
    const [text, settext ] = useState("")

    const {addTodo} = useTodo()
    
    // useEffect(()=>{
    //     console.log(todo)
    // },[todo])
    
    const Add = (e)=>{
        e.preventDefault()
        if(!text) return
        // console.log(`form submitted ${todo}`)
        addTodo({text, completed: false})
        settext('')

    }
    

    return (
        <form onSubmit={Add} className="flex">
            <input
                type="text"
                placeholder="Write todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={text}
                onChange={(e)=>{settext(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

