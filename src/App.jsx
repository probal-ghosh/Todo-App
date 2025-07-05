import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItems'
import { TodoProvider } from './context/TodoContext'

// setTimeout(console.log(Todos), 2000)

function App() {
    const [Todos, setTodos] = useState([])

    const addTodo = (Todo)=>{
        setTodos((prev)=>[{id: Date.now(), ...Todo}, ...prev])
        console.log(Todos)
    }
    

    return (
        <TodoProvider value={{Todos, addTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* <TodoItem/> */}
                    </div>
                </div>
            </div>
            </TodoProvider>
    )
}

export default App
