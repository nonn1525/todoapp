import React, { useState } from 'react';
import DeleteModal from './DeleteModal'
import NocheckModal from './NocheckModal'
import Checkbox from '@material-ui/core/Checkbox';
import {ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

const Item = ({ content, id, completed, importance, dropdowncategory, memo, selectedDate, deleteTodo, checkToggle }) => {

  const handleDelete = () => {
    deleteTodo(id)
  }
  const choice = () => {
    checkToggle(id)
  }

  return (
    <ListGroupItem>
      <Checkbox color='primary' className='checkinput' type='checkbox' checked={completed} onChange={choice} />
     <ListGroupItemHeading style={
       {textDecoration: completed ? 'line-through' : 'none'}
      }>
          Task：{content}
      </ListGroupItemHeading>
      <ListGroupItemText>
        <p>memo：{memo}</p>
      {/* <p>時間：{selectedDate}</p> */}
      <p>カテゴリー：{dropdowncategory}</p>
      <p>優先度：{importance}</p>
      </ListGroupItemText>
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
    </ListGroupItem>
  )
}

export default Item;