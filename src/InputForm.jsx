import React, { useState } from 'react';

// import Select from 'react-select'
import ExpansionPanels from './ExpansionPanels'

const InputForm = ({ addTodo, dropdownSelect, setDropdownSelect }, ) => {
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
  
  // const handleSelect = (e) => {
  //   setDropdownSelect(e.target.value)
  // }
  return (
    <React.Fragment>
      <div className='form-group row justify-content-center'>
        <form name='task' className='form-inline' >
       
        {/* onSubmit={handleSubmit} */}
        <input type='text' className='form-control' onChange={e => {
          setValue(e.target.value)}}/>
          <button className='btn btn-primary'>タスクを追加</button>
        </form>
        <ExpansionPanels/>
      </div>
    </React.Fragment>
    )
}

export default InputForm;