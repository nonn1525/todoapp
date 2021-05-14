import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const InputForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [dropdownSelect, setDropdownSelect] =
    useState('☆☆☆')

  const dropdowntoggle = () => setDropdownOpen(prevState => !prevState);

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
    <div className='form-group row justify-content-center'>
      <form name='task' className='form-inline' onSubmit={handleSubmit}>
      <label className='h4'>Task:</label>
      <Dropdown isOpen={dropdownOpen} toggle={dropdowntoggle}>
      <DropdownToggle caret>
          重要度
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>重要度を設定</DropdownItem>
          <DropdownItem value='☆☆★' 
          onClick={handleSelect}>☆☆★</DropdownItem>
          <DropdownItem value='☆★★' onClick={handleSelect}>☆★★</DropdownItem>
          <DropdownItem value='★★★'onClick={handleSelect}>★★★</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <input type='text' className='form-control' onChange={e => {
        setValue(e.target.value)}}/>
        <span className='text-primary h4'>{dropdownSelect}</span>
        <button className='btn btn-primary'>追加</button>
      </form>
    </div>
    )
}

export default InputForm;