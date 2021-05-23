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
      setMemo('')
      document.task.reset();
    }
  }

  return (
    <React.Fragment>
      <div className='form-group row justify-content-center'>
        <form 
          name='task' 
          className='form-inline excontainer' 
          onSubmit={handleSubmit} 
        >
          <div className='ip'>
            <input 
              type='text' 
              className='form-control' 
              onChange={e => {
                setValue(e.target.value)}}
            />
              <button className='btn btn-primary'>タスクを追加</button>
          </div>
          <div>
            <ExpansionPanels 
              dropdownSelect={dropdownSelect} 
              setDropdownSelect={setDropdownSelect} 
              dropdowncategory={dropdowncategory} 
              setDropdownCategory={setDropdownCategory} 
              memo={memo} 
              setMemo={setMemo} 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate}
            />
          </div>
        </form>

      </div>
        <style jsx>
          {`
            .excontainer {
              display:flex;
              flex-direction: column;
              margin: 0 auto;
            }
          `}
        </style>
    </React.Fragment>
    )
}

export default InputForm;