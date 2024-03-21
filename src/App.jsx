import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import TodoCard from "./components/TodoCard"


function App() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and veg',
    'Drive around'
]
  return (
    <>
     <TodoInput  />
     <TodoList todos={todos} />
     <TodoCard />
    </>
  )
}

export default App
