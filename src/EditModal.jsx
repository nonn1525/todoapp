import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// {edithandleSelect, edithandleCategorySelect, edithandleDateChange}

const EditModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const [editdropdownSelect, setEditDropdownSelect] =
  useState('☆☆☆')

  const [editdropdowncategory, setEditDropdownCategory] = useState('モンハン')

  const [editmemo, setEditMemo] = useState('')

  const toggle = () => setModal(!modal);

  const edithandleSelect = (e) => {
    setEditDropdownSelect(e.target.value)
    console.log(editdropdownSelect)
  }
  const edithandleCategorySelect = (e) => {
    setEditDropdownCategory(e.target.value)
    console.log(editdropdowncategory)
  }

  // const edithandleDateChange = (date) => {
  //   setEditSelectedDate(date);
  // };

  const edit = () => {
    setModal(!modal);
    // props.setTodos([
    //   ...props.todos,
    //   {
    //     content: content,
    //     id: shortid.generate(),
    //     completed: false,
    //     memo: memo,
    //     selectedDate: selectedDate,
    //     dropdowncategory: dropdowncategory,
    //     importance: dropdownSelect,
    //   }
    // ])
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>編集画面</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Task</Label>
            <Input type="text" name="task"/>
            <Label>memo</Label>
            <Input type="text" name="memo" />
            <Label>カテゴリー</Label>
            <Input type="select" name="select" id="exampleSelect" onChange={edithandleCategorySelect}>
              <option value='買い物リスト' >買い物リスト</option>
              <option value='勉強' >勉強</option>
              <option value='仕事' >仕事</option>
              <option value='モンハン' >モンハン</option>
              <option value='新しいカテゴリを追加' >新しいカテゴリを追加</option>
            </Input>
            <Label>優先度</Label>
            <Input type="select" name="select" id="exampleSelect" onChange={edithandleSelect}>
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