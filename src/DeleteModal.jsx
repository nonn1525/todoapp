import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const okClick = () => {
    toggle()
    props.handleDelete();
  }

  return (
    <div>
      <Button 
        color="danger" 
        onClick={toggle}>
          {buttonLabel}
      </Button>
      <Modal 
        isOpen={modal} 
        toggle={toggle} 
        className={className}>
        <ModalHeader 
          toggle={toggle}>
            削除確認画面
        </ModalHeader>
        <ModalBody>
          削除しますか？
        </ModalBody>
        <ModalFooter>
          <Button 
            color="primary" 
            onClick={okClick}>
              OK
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

export default DeleteModal;