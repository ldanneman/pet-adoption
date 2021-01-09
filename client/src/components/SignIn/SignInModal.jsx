import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SignIn from "./SignIn";

function SignInModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign In/Sign Up
      </Button>

      <Modal id="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignIn />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignInModal;
