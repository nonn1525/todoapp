// import React, { useState } from 'react';

const Item = ({ content, id, completed,  deleteTodo, checkToggle }) => {
  const handleDelete = () => {
    deleteTodo(id)
  }
  const choice = () => {
    checkToggle(id)
  }

  return (
    <li><input type='checkbox' checked={completed} onChange={choice} />
    
      <span style={
        {textDecoration: completed ? 'line-through' : 'none'}
      }>{content}</span>
      <button className='deletebtn' onClick={handleDelete}>×</button>
    </li>
  )
}

export default Item;