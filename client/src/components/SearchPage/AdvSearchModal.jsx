import React, { useState } from "react";
import {
  Button,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import "./AdvSearchModal.scss";

function AdvSearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value1, setValue1] = useState(1);
  const handleChange1 = (val) => setValue1(val);
  const [value2, setValue2] = useState(1);
  const handleChange2 = (val) => setValue2(val);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Advanced
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Advanced Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ToggleButtonGroup
            type="radio"
            // defaultValue={1}
            value={value1}
            onChange={handleChange1}
            className="mb-2"
            name="yoyo"
          >
            <ToggleButton value={1}>Checkbox 1 </ToggleButton>
            <ToggleButton value={2}>Checkbox 2</ToggleButton>
            <ToggleButton value={3}>Checkbox 3 </ToggleButton>
          </ToggleButtonGroup>
          <br />
          <ToggleButtonGroup
            type="radio"
            name="options"
            value={value2}
            onChange={handleChange2}
          >
            <ToggleButton value={1}>Radio 1 </ToggleButton>
            <ToggleButton value={2}>Radio 2</ToggleButton>
            <ToggleButton value={3}>Radio 3</ToggleButton>
          </ToggleButtonGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdvSearchModal;
