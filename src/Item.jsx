import React, { useState } from 'react';
import DeleteModal from './DeleteModal'
import NocheckModal from './NocheckModal'
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ content, id, completed, importance, deleteTodo, checkToggle }) => {

  const handleDelete = () => {
    deleteTodo(id)
  }
  const choice = () => {
    checkToggle(id)
  }

  return (
    <li>
      <Checkbox color='primary' className='checkinput' type='checkbox' checked={completed} onChange={choice} />
      <span style={
        {textDecoration: completed ? 'line-through' : 'none'}
        }>{content}</span>
        <span>：{importance}</span>
      {completed ? <DeleteModal 
        buttonLabel='×' 
        className='deletebtn' 
        id={id}
        handleDelete={handleDelete}/>
        :
        <NocheckModal 
          buttonLabel='×' 
          className='deletebtn' 
          id={id}
          handleDelete={handleDelete}/>}
    </li>
  )
}

export default Item;