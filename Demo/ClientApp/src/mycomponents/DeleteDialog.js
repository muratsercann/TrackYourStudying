import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteDialog({ onClose }) {

  const handleClose = () => {
    onClose("cancel");
  }

  const handleDelete = () => {
    onClose("delete");
  }


  return (<>
    <Modal show={true} onHide={handleClose} style={{zIndex:'222222'}}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Uyarı</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>Seçili öğeyi silmek istediğinize emin misiniz ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          İptal
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  </>);
}