import React from 'react';
import Item from './Item';
import {ListGroup} from 'reactstrap';

const List = ({todos, deleteTodo, checkToggle}) => {

  return (
    <ListGroup style = {{ listStyle: 'none' }}>
      {
        todos.map((todo, id) => {
          return <Item 
          content={todo.content}
          id={todo.id}
          completed={todo.completed}
          selectedDate={todo.selectedDate}
          dropdowncategory={todo.dropdowncategory}
          importance={todo.importance}
          memo={todo.memo}
          deleteTodo={deleteTodo}
          checkToggle={checkToggle}
          />
        })
      }
    </ListGroup>
  )
}
export default List;