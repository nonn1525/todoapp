import React, { useState } from 'react';
import DeleteModal from './DeleteModal'
import NocheckModal from './NocheckModal'

const Item = ({ content, id, completed, importance, deleteTodo, checkToggle }) => {

  const handleDelete = () => {
    deleteTodo(id)
  }
  const choice = () => {
    checkToggle(id)
  }

  return (
    <li>
      <input className='checkinput' type='checkbox' checked={completed} onChange={choice} />
      <span style={
        {textDecoration: completed ? 'line-through' : 'none'}
        }>{content}</span>
        <span>{importance}</span>
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