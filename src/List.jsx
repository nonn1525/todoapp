import React from 'react';
import Item from './Item';

const List = ({todos, deleteTodo, checkToggle}) => {
  return (
    <ul style = {{ listStyle: 'none' }}>
      {
        todos.map((todo, id) => {
          return <Item 
          content={todo.content}
          id={todo.id}
          completed={todo.completed}
          deleteTodo={deleteTodo}
          checkToggle={checkToggle}
          />
        })
      }
    </ul>
  )
}
export default List;