import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItems'
import { TodoProvider } from './context/TodoContext'

// setTimeout(console.log(Todos), 2000)

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo)=>{
        // console.log(Todo)
        setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
        // console.log(Todos)
    }
    
    const toggleTodo = (id)=>{
        setTodos((prev)=> prev.map((prevtodos)=>
        prevtodos.id === id ? {...prevtodos, completed: !prevtodos.completed}: prevtodos
        ))
    }

    const updateTodo = (id, todo)=>{
        setTodos((prev)=> prev.map((prevtodos)=>
            prevtodos.id === id ? todo: prevtodos
        ))
    }

    const deleteTodo = (id)=>{
        setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
    }


    useEffect(()=>{
    const todos =JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0){
        setTodos(todos)
    }
    }, [])

    useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    // localStorage.clear()

    return (
        <TodoProvider value={{todos, addTodo, toggleTodo, updateTodo, deleteTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                            <div key={todo.id}
                            className='w-full'>
                                {/* {console.log(todo)} */}
                                <TodoItem todos={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </TodoProvider>
    )
}

export default App
