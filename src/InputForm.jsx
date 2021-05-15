import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Input } from 'reactstrap';
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
        <label className='h4'>Task:</label>
        <FormGroup>
        <Input type="select" name="select" id="exampleSelect" onClick={handleSelect}>
          <option value='☆☆★'>重要度：☆☆★</option>
          <option value='☆★★'>重要度：☆★★</option>
          <option value='★★★'>重要度：★★★</option>
        </Input>
      </FormGroup>
        <input type='text' className='form-control' onChange={e => {
          setValue(e.target.value)}}/>
          <button className='btn btn-primary'>追加</button>
        </form>
      </div>
    </React.Fragment>
    )
}

export default InputForm;