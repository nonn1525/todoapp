import React, { useState } from 'react';
import DeleteModal from './DeleteModal'

const Item = ({ content, id, completed,  deleteTodo, checkToggle }) => {

  const handleDelete = () => {
    deleteTodo(id)
  }
  const choice = () => {
    checkToggle(id)
  }

  return (
    <li><input className='checkinput' type='checkbox' checked={completed} onChange={choice} />
    
      <span style={
        {textDecoration: completed ? 'line-through' : 'none'}
      }>{content}</span>
      <DeleteModal 
      buttonLabel='×' 
      className='deletebtn' 
      id={id}
      deleteTodo={deleteTodo}/>
      {/* <button className='deletebtn' onClick={handleDelete}>×</button> */}
    </li>
  )
}

export default Item;