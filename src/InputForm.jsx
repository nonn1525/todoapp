import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select'

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
  
  const handleSelect = (e) => {
    setDropdownSelect(e.target.value)
  }
  return (
    <React.Fragment>
      <div className='form-group row justify-content-center'>
        <form name='task' className='form-inline' onSubmit={handleSubmit}>
        <FormGroup>
        <Input type="select" name="select" id="exampleSelect" onClick={handleSelect}>
          <option value='☆☆★'>優先度：☆☆★</option>
          <option value='☆★★'>優先度：☆★★</option>
          <option value='★★★'>優先度：★★★</option>
        </Input>
      </FormGroup>
        <input type='text' className='form-control' onChange={e => {
          setValue(e.target.value)}}/>
          <button className='btn btn-primary'>タスクを追加</button>
        </form>
      </div>
    </React.Fragment>
    )
}

export default InputForm;