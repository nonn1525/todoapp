import React from 'react';
import DeleteModal from './DeleteModal'
import NocheckModal from './NocheckModal'
import EditModal from './EditModal';
import Checkbox from '@material-ui/core/Checkbox';
import {ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';


const Item = ({ content, id, completed, importance, deleteTodo, checkToggle, setDropdownSelect, dropdowncategory, setDropdownCategory, memo, todos, setTodos }) => {

  const handleDelete = () => {
    deleteTodo(id)
  }
  const choice = () => {
    checkToggle(id)
  }

  return (
    <React.Fragment>
    <ListGroupItem>
      <Checkbox 
        color='primary' 
        className='checkinput' 
        type='checkbox' 
        checked={completed} 
        onChange={choice} 
      />
     <ListGroupItemHeading 
      className='listhead' 
      style={
        {textDecoration: completed ? 'line-through' : 'none'}
        }
      >
          Task：{content}
      </ListGroupItemHeading>
      <ListGroupItemText>
        <p>memo：{memo}</p>
        {/* <p>時間：{selectedDate}</p> */}
        <p>カテゴリー：{dropdowncategory}</p>
        <p>優先度：{importance}</p>
      </ListGroupItemText>
      <EditModal 
        buttonLabel='Edit' 
        setDropdownSelect={setDropdownSelect} 
        setDropdownCategory={setDropdownCategory}
        todos={todos} 
        setTodos={setTodos}
        id={id}
        setTodos={setTodos}/>
        {completed ? 
          <DeleteModal 
            buttonLabel='×' 
            className='deletebtn' 
            id={id}
            handleDelete={handleDelete}
          />
          :
            <NocheckModal 
            buttonLabel='×' 
            className='deletebtn' 
            id={id}
            handleDelete={handleDelete}
          />
        }
      
    </ListGroupItem>
      <style jsx>
        {`
          .listhead {
            padding-bottom: px;
          }
          p {
            font-size: 15px;
            margin: 0;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default Item;