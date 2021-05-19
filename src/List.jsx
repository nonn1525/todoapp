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
          dropdownSelect={dropdownSelect}setDropdownSelect={setDropdownSelect} dropdowncategory={dropdowncategory} setDropdownCategory={setDropdownCategory} memo={memo} 
          setMemo={setMemo} 
          selectedDate={selectedDate} 
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