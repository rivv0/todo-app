import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState , useEffect} from "react"
function App(){
  const [todos, setTodos] = useState([{input : "Hello add first todo", complete : true}])
  const [selectedTab, setSelectedTab] = useState("All")
  function handleAdd(newTodo){
    const newTodoList = [...todos, {input : newTodo, complete: false}
  ]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleDelete(index){
    let newTodoList = todos.filter((val , valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleCompleteTodo(index){
    let newTodoList = [ ...todos]
    let CompletedTodo = todos[index]
    CompletedTodo['complete'] = true
    newTodoList[index] = CompletedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleSaveData(currentTodos){
    localStorage.setItem('todo-app', JSON.stringify({ todos : currentTodos}))
  }
  useEffect(() => {
    if(!localStorage || localStorage.getItem('todo-app')) {return}
    console.log('here')
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db)
  }, [])
  
  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoInput handleAdd={handleAdd} />
      <TodoList handleCompleteTodo = {handleCompleteTodo}handleDelete= {handleDelete} selectedTab = {selectedTab}  todos={todos}/>
    </>
  )
}

export default App
