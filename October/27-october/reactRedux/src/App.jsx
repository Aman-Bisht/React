import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from "./components/Todo"

function App() {

  return (
    <>
    <div>React-Redux ToolKit</div>
    <AddTodo/>
    <Todo />
    </>
  )
}

export default App
