import React from 'react'

export default function TodoList() {
let todos = [
    'Go to the gym',
    'Eat more fruits and veg',
    'Drive around'
]

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
