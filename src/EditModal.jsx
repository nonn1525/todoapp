import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// {edithandleSelect, edithandleCategorySelect, edithandleDateChange}

const EditModal = (props, {todos, id, setTodos}) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false)
  const [edittask, setEditTask] = useState('')
  const [editdropdownSelect, setEditDropdownSelect] =
  useState('☆☆☆')
  const [editdropdowncategory, setEditDropdownCategory] = useState('モンハン');
  const [editmemo, setEditMemo] = useState('')

  const toggle = () => setModal(!modal)

  const edittaskChange = (e) => {
    setEditTask(e.target.value)
  }

  const editmemoChange = (e) => {
    setEditMemo(e.target.value)
  }

  const edithandleSelect = (e) => {
    setEditDropdownSelect(e.target.value)
    console.log(editdropdownSelect)
  }
  const edithandleCategorySelect = (e) => {
    setEditDropdownCategory(e.target.value)
  }

  // const edithandleDateChange = (date) => {
  //   setEditSelectedDate(date);
  // };

  const edit = () => {
    setModal(!modal);
    const edititem = props.todos.map((todo, id) => {
      if(todo.id === props.id) {
        todo.content = edittask
        todo.memo = editmemo
        todo.importance = editdropdownSelect
        todo.dropdowncategory = editdropdowncategory
        return todo;
      } else {
        return todo;
      }
    })
    props.setTodos(edititem)
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>編集画面</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Task</Label>
            <Input type="text" name="task" onChange={edittaskChange}/>
            <Label>memo</Label>
            <Input type="text" name="memo" onChange={editmemoChange}/>
            <Label>カテゴリー</Label>
            <Input type="select" name="select" id="exampleSelect" onChange={edithandleCategorySelect}>
              <option value='' >カテゴリーを選択</option>
              <option value='買い物リスト' >買い物リスト</option>
              <option value='勉強' >勉強</option>
              <option value='仕事' >仕事</option>
              <option value='モンハン' >モンハン</option>
              <option value='新しいカテゴリを追加' >新しいカテゴリを追加</option>
            </Input>
            <Label>優先度</Label>
            <Input type="select" name="select" id="exampleSelect" onChange={edithandleSelect}>
              <option value='☆☆☆' >☆☆☆</option>
              <option value='☆☆★' >☆☆★</option>
              <option value='☆★★' >☆★★</option>
              <option value='★★★' >★★★</option>
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={edit}>Edit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;