import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NocheckModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  // const handleDelete = () => {
  //   deleteTodo(id)
  // }

  const toggle = () => setModal(!modal);

  const okClick = () => {
    toggle()
    props.handleDelete();
  }

  return (
    <div>
      <Button color="success" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>削除確認画面</ModalHeader>
        <ModalBody>
          タスクが完了していません。
          本当に削除しますか？
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={okClick}>OK</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NocheckModal;