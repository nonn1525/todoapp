import React from 'react';
import Item from './Item';
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

const List = ({todos, deleteTodo, checkToggle}) => {
  return (
    <ListGroup style = {{ listStyle: 'none' }}>
      {
        todos.map((todo, id) => {
          return <Item 
          content={todo.content}
          id={todo.id}
          completed={todo.completed}
          importance={todo.importance}
          deleteTodo={deleteTodo}
          checkToggle={checkToggle}
          />
        })
      }
    </ListGroup>
  )
}
export default List;