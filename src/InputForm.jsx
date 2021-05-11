import React, { useState } from 'react';

const InputForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (value === '') {
      alert('入力してください')
      return;
    } else {
      addTodo(value)
    }
    if (value) {
      setValue('')
      document.task.reset();
    }
  }
  return (
    <div className='form-group row justify-content-center'>
      <form name='task' className='form-inline' onSubmit={handleSubmit}>
      <label>Task:</label>
      <select>
        <option value='1'>☆☆★</option>
        <option value='2'>☆★★</option>
        <option value='3'>★★★</option>
      </select>
      <input type = 'text' className='form-control' onChange={e => {
        setValue(e.target.value)}}/>
        <button className='btn btn-primary'>追加</button>
      </form>
    </div>
    )
}

export default InputForm;