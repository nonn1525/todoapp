import React from 'react';
import Item from './Item';
import {ListGroup} from 'reactstrap';

const List = ({todos, deleteTodo, checkToggle, dropdownSelect, setDropdownSelect, dropdowncategory, setDropdownCategory, memo, setMemo, selectedDate, setSelectedDate, setTodos}) => {

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
          dropdownSelect={todo.dropdownSelect}setDropdownSelect={setDropdownSelect} dropdowncategory={todo.dropdowncategory} setDropdownCategory={setDropdownCategory} memo={todo.memo} 
          setMemo={setMemo} 
          selectedDate={todo.selectedDate} 
          setSelectedDate={setSelectedDate} 
          todos={todos}
          setTodos={setTodos}
          />
        })
      }
    </ListGroup>
  )
}
export default List;