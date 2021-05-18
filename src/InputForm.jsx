import React, { useState } from 'react';

// import Select from 'react-select'
import ExpansionPanels from './ExpansionPanels'

const InputForm = ({ addTodo, dropdownSelect, setDropdownSelect, dropdowncategory, setDropdownCategory, memo, setMemo, selectedDate, setSelectedDate }) => {
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
    <React.Fragment>
      <div className='form-group row justify-content-center'>
        <form name='task' className='form-inline' onSubmit={handleSubmit} >
      
        <input type='text' className='form-control' onChange={e => {
          setValue(e.target.value)}}/>
          <button className='btn btn-primary'>タスクを追加</button>
        </form>
      </div>
      <div className='excontainer'>

        <ExpansionPanels dropdownSelect={dropdownSelect} setDropdownSelect={setDropdownSelect} dropdowncategory={dropdowncategory} setDropdownCategory={setDropdownCategory} memo={memo} setMemo={setMemo} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      </div>
        <style jsx>
          {`
            .excontainer {
              width: 300px;
              margin: 0 auto;
            }
          `}
        </style>
    </React.Fragment>
    )
}

export default InputForm;