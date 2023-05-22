import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EmployeeModal = ({ edit, onClick, active, onClose }) => {
  const [n1, setn1] = useState("");
  const [n2, setn2] = useState("");
  const [n3, setn3] = useState("");
  const [n4, setn4] = useState("");
  const [n5, setn5] = useState("");

  return (
    <Modal className=" fade" id="editEmployee" show={active}>
      <div className="modal-content">
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Employee</Modal.Title>
          <Button
            variant=""
            className="close"
            data-dismiss="modal"
            onClick={() => {
              onClose();
              setn1("");
              setn2("");
              setn3("");
              setn4("");
              setn5("");
            }}
          >
            <span>×</span>
          </Button>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Hamza"
                onChange={(e) => setn1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Rehioui"
                onChange={(e) => setn2(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Working Hours</label>
              <input
                type="text"
                className="form-control"
                placeholder="32"
                onChange={(e) => setn3(e.target.value)}
              />
            </div>{" "}
            <div className="form-group">
              <label>Salary</label>
              <input
                type="text"
                className="form-control"
                placeholder="20000"
                onChange={(e) => setn4(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Manager ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="1"
                onChange={(e) => setn5(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={async () => {
                  await axios.post(`http://localhost:5001/employee`, {
                     emp_firstname: n1.toString(),
                     emp_lastname: n2.toString(),
                     emp_workingHours: n3.toString(),
                     emp_salary: n4.toString(),
                     emp_mgr_id: n5.toString()
                   })
                  alert("Employee has been successfully added!");
                  onClick();
              }}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default EmployeeModal;
