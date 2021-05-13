import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = (props, id, deleteTodo) => {
  const {
    buttonLabel,
    className
  } = props;

  const handleDelete = () => {
    deleteTodo(id)
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>削除確認画面</ModalHeader>
        <ModalBody>
          削除しますか？
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>OK</Button>{handleDelete}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeleteModal;