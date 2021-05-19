import React, { memo, useState } from 'react';
import InputForm from "./InputForm";
import List from "./List";
import shortid from 'shortid';
import All from "./All";

const App = () => {
  const [todos, setTodos] = useState([
  ])

  const [filtertodo, setFilterTodo] = useState([])

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'))

  const [dropdownSelect, setDropdownSelect] =
    useState('☆☆☆')

  const [dropdowncategory, setDropdownCategory] = useState('モンハン')

  const [memo, setMemo] = useState('')

  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate(),
        completed: false,
        memo: memo,
        selectedDate: selectedDate,
        dropdowncategory: dropdowncategory,
        importance: dropdownSelect,
      }
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const categoryFilter = dropdowncategory => {
    setFilterTodo(todos.filter(todo => todo.dropdowncategory === dropdowncategory))
  }

  const checkToggle = id => {
    const check = todos.map((todo) => {
      if (todo.id === id) {
          if (todo.completed === true) {
            todo.completed = false;
          } else if (todo.completed === false) {
            todo.completed = true;
          } else {
          }
          return todo;
      } else {
        return todo;
      }
    })
    setTodos(check)
  }

  return (
    <div className='App'>
      <h1 className='bg-primary text-white display-4'>ToDoApp</h1>
      <div className='exxcontainer'>
        <InputForm addTodo={addTodo} 
        dropdownSelect={dropdownSelect}setDropdownSelect={setDropdownSelect} dropdowncategory={dropdowncategory} setDropdownCategory={setDropdownCategory} 
        memo={memo} 
        setMemo={setMemo} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate}/>
        <All todos={todos} setTodos={setTodos} />
        <List todos={todos} 
        deleteTodo={deleteTodo} 
        checkToggle={checkToggle} 
        dropdownSelect={dropdownSelect}setDropdownSelect={setDropdownSelect} dropdowncategory={dropdowncategory} setDropdownCategory={setDropdownCategory} 
        memo={memo} 
        setMemo={setMemo} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        todos={todos}
        setTodos={setTodos}/>
      </div>
    </div>
  );
}
  export default App;