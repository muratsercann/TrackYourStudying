import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { AiFillCheckCircle } from "react-icons/ai"
import { MdCancel } from "react-icons/md"

export default function ToastDialog({ toast, setToast }) {
  // const [show, setShow] = useState(true);
  const onClose = () => {
    setToast({ ...toast, show: false });
  }

  const icons = {
    success: <AiFillCheckCircle color='green' size={21} />,
    error: <MdCancel color='red' size={21} />
  }

  const icon = icons.success;

  if (toast.type == 'error') {
    icon = icons.error;
  }

  return (<>
    <div style={{ width:'100%', display:'flex', justifyContent:'center', position: 'fixed', top: '10px', zIndex: '99999' }}>
      <Toast
        className="d-inline-block m-1"
        onClose={onClose}
        show={toast.show}
        animation={true}
        delay={2000}
        autohide
        bg={toast.type}
        style={{ color: 'white' }}
      >
        <Toast.Header closeButton={true}>
          {icon}
          <strong className="me-auto mx-2">{toast.message}</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        {/* <Toast.Body>{toast.message}</Toast.Body> */}
      </Toast>
    </div >
  </>);
}