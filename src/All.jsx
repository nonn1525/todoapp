import styled from 'styled-components';
// import { FormGroup, Label, Input } from 'reactstrap';
import React from 'react';
import { firebase } from './firebase.js';

const All = ({todos, setTodos}) => {

  const allset = () => {
    const newTodos = todos.map((todo) => {
      todo.completed = true;
      return todo;
    })
    setTodos(newTodos)
  }
  const allDelete = () => {
    setTodos(todos.filter(todo => todo.completed !== true))
    for(let i in todos) {
      if(todos[i].completed === true){
        firebase.firestore().collection('todos').doc(todos[i].id).delete();
      // } else {
      //   return
      }
    }
  }

  return (
    <StyledDiv>
      <div className='all' primary>
        <button className='btn btn-primary delete' onClick={allset}>全選択</button>
        <button className='btn btn-primary delete' onClick={allDelete}>選択した項目を削除</button>
      </div>
      {/* <FormGroup className='cg'>
        <Label>カテゴリー別表示</Label>
        <Input type="select" name="select" id="exampleSelect" className='cgselect'>
        
          <option value='買い物リスト' >買い物リスト</option>
          <option value='勉強' >勉強</option>
          <option value='仕事' >仕事</option>
          <option value='モンハン' >モンハン</option>
          <option value='新しいカテゴリを追加' >新しいカテゴリを追加</option>
        </Input>
      </FormGroup> */}
    </StyledDiv>
  )
}

export default All;

const StyledDiv = styled.div`
    margin: 10px 25%;

    // label {
    //   line-height: 40px;
    // }
    // .cg {
    //   width: 500px;
    //   margin: 10px auto;
    //   display: flex;
    // }
    // .cgselect {
    //   width: 300px;
    //   margin-left: 30px;
    // }
`