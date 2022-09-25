import React from 'react'

export const ItemTodo = ({todo, usuario}) => {
  return (
    <li>
    <div>
      <h1>User: {usuario.name}</h1>
    </div>
    <div>
      <h3>ID: {todo.id}</h3>
      <p>Title: {todo.title}</p>
    </div>
  </li>
  )
}
