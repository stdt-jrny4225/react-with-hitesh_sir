import { useEffect, useState } from 'react' 
import './App.css'
import { TodoProvider } from './context'
import{ TodoItem, TodoForm } from './components'

function App() {
  const [todos, SetTodos] = useState([])
  const addTodo = (todo) => {
    SetTodos((prevTodos) => [...prevTodos, {...todo, id: Date.now(), completed: false}])
  }
  const updateTodo = (id, updatedTodo) => {
    SetTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, ...updatedTodo} : todo))
  }
  const removeTodo = (id) => {
    SetTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }
  const toggleTodo = (id) => {
    SetTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) 
    if (storedTodos && storedTodos.length >0){ 
    SetTodos(storedTodos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo, toggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  
  )
}

export default App
