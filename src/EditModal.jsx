import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { firebase } from './firebase.js';

const EditModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false)
  const [editTask, setEditTask] = useState('')
  const [editdropdownSelect, setEditDropdownSelect] =
  useState('☆☆☆')
  const [editdropdownCategory, setEditDropdownCategory] = useState('モンハン');
  const [editMemo, setEditMemo] = useState('')

  const toggle = () => setModal(!modal)

  const edittaskChange = (e) => {
    setEditTask(e.target.value)
  }

  const editmemoChange = (e) => {
    setEditMemo(e.target.value)
  }

  const edithandleSelect = (e) => {
    setEditDropdownSelect(e.target.value)
  }
  const edithandleCategorySelect = (e) => {
    setEditDropdownCategory(e.target.value)
  }

  const fbupdate = () => {
    firebase.firestore().collection('todos').doc(props.id).set({
      completed: false,
      content: editTask,
      dropdowncategory: editdropdownCategory,
      id: props.id,
      importance: editdropdownSelect,
      memo: editMemo,
      // selectedDate: 
    })
  }
  // const edithandleDateChange = (date) => {
  //   setEditSelectedDate(date);
  // };

  const edit = () => {
    setModal(!modal);
    const edititem = props.todos.map((todo, id) => {
      if(todo.id === props.id) {
        todo.content = editTask
        todo.memo = editMemo
        todo.importance = editdropdownSelect
        todo.dropdowncategory = editdropdownCategory
        return todo;
      } else {
        return todo;
      }
    })
    props.setTodos(edititem)
    fbupdate()
  }

  return (
    <div>
      <Button 
        color="primary" 
        onClick={toggle}>
          {buttonLabel}
      </Button>
      <Modal 
        isOpen={modal} 
        toggle={toggle} 
        className={className}>
        <ModalHeader 
          toggle={toggle}>
            編集画面
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Task</Label>
            <Input 
              type="text" 
              name="task" 
              onChange={edittaskChange}
            />
            <Label>memo</Label>
            <Input 
              type="text" 
              name="memo" 
              onChange={editmemoChange}
            />
            <Label>カテゴリー</Label>
            <Input 
              type="select" 
              name="select" 
              id="exampleSelect" 
              onChange={edithandleCategorySelect}
            >
              <option value='' >カテゴリーを選択</option>
              <option value='買い物リスト' >買い物リスト</option>
              <option value='勉強' >勉強</option>
              <option value='仕事' >仕事</option>
              <option value='モンハン' >モンハン</option>
              <option value='新しいカテゴリを追加' >新しいカテゴリを追加</option>
            </Input>
            <Label>優先度</Label>
            <Input 
              type="select" 
              name="select" 
              id="exampleSelect" 
              onChange={edithandleSelect}
            >
              <option value='☆☆☆' >☆☆☆</option>
              <option value='☆☆★' >☆☆★</option>
              <option value='☆★★' >☆★★</option>
              <option value='★★★' >★★★</option>
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button 
            color="primary" 
            onClick={edit}>
             Edit
          </Button>{' '}
          <Button 
            color="secondary" 
            onClick={toggle}>
              Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;