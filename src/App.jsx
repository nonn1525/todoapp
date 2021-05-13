import React, { useState } from 'react';
import InputForm from "./InputForm";
import List from "./List";
import shortid from 'shortid';
import All from "./All";

const App = () => {
  const [todos, setTodos] = useState([
  ])
  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate(),
        completed: false
      }
    ])
  }
  const deleteTodo = id => {
    
    setTodos(todos.filter(todo => todo.id !== id))
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
      <InputForm addTodo={addTodo} />
      <All todos={todos} setTodos={setTodos} />
      <List todos={todos} deleteTodo={deleteTodo} checkToggle={checkToggle}/>
    </div>
  );
}
  export default App;