import React, { Fragment, useEffect } from "react";
import PageTitle from "../../layouts/PageTitle";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  Button,
} from "react-bootstrap";
import EmployeeModal from "./EmployeeModal";
import axios from "axios";

const EmployeesTable = () => {
  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
  const [employeeModal, setEmployeeModal] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);
  const [totalhrs, setTotalHrs] = React.useState(0);
  const [totalsalary, setTotalSalary] = React.useState(0);
  const [avgsalary, setAvgSalary] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (refresh) {
      axios.get(`http://localhost:5001/employee`).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
      axios.get(`http://localhost:5001/employee/count`).then((res) => {
        console.log(res.data);
        setCount(res.data);
      });
      axios.get(`http://localhost:5001/employee/totalhrsworked`).then((res) => {
        console.log(res.data);
        setTotalHrs(parseInt(res.data));
      });
      axios.get(`http://localhost:5001/employee/totalsalary`).then((res) => {
        console.log(res.data);
        setTotalSalary(parseInt(res.data));
      });
      axios.get(`http://localhost:5001/employee/avgsalary`).then((res) => {
        console.log(res.data);
        setAvgSalary(parseInt(res.data));
      });
      setRefresh(false);
    }
  }, [refresh]);

  const ondelete = (e_id) => {
    axios.delete(`http://localhost:5001/employee/${e_id}`).then((res) => {
      alert(res.data);
      setRefresh(true);
    });
  };

  const addEmployee = (emp) => {
    setRefresh(true);
  };

  return (
    <Fragment>
      <EmployeeModal
        edit={true}
        active={employeeModal}
        onClick={(e) => {
          setEmployeeModal(false);
          addEmployee(e);
        }}
        onClose={() => {
          setEmployeeModal(false);
        }}
      />
      <PageTitle activeMenu="Employees" motherMenu="Data Management" />
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card bg-danger">
            <div className="card-body  p-4">
              <div className="media">
                <span className="mr-3">
                  <i className="flaticon-381-calendar-1"></i>
                </span>
                <div className="media-body text-white text-right">
                  <p className="mb-1">Employees</p>
                  <h3 className="text-white">{count}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card bg-success">
            <div className="card-body p-4">
              <div className="media">
                <span className="mr-3">
                  <i className="flaticon-381-diamond"></i>
                </span>
                <div className="media-body text-white text-right">
                  <p className="mb-1">Total Hours Worked</p>
                  <h3 className="text-white">{totalhrs}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card bg-info">
            <div className="card-body p-4">
              <div className="media">
                <span className="mr-3">
                  <i className="flaticon-381-heart"></i>
                </span>
                <div className="media-body text-white text-right">
                  <p className="mb-1">Total Salary</p>
                  <h3 className="text-white">{totalsalary} MAD</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card bg-primary">
            <div className="card-body p-4">
              <div className="media">
                <span className="mr-3">
                  <i className="flaticon-381-user-7"></i>
                </span>
                <div className="media-body text-white text-right">
                  <p className="mb-1">Average Salary</p>
                  <h3 className="text-white">{avgsalary} MAD</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Employees
              </Card.Title>
              <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                <input
                  type="text"
                  style={{ maxWidth: 400, marginLeft: 20 }}
                  className="form-control"
                  defaultValue=""
                  name="searchQuery"
                  placeholder="Search for anything ..."
                />
                <Button
                  variant=""
                  data-toggle="modal"
                  data-target="#editEmployee"
                  className="plus-icon text-white rounded bg-primary d-flex align-items-center justify-content-center"
                  onClick={() => setEmployeeModal(true)}
                >
                  <i className="las la-plus scale-2" />
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="width80">
                      <strong>#</strong>
                    </th>
                    <th>
                      <strong>Full Name</strong>
                    </th>
                    <th>
                      <strong>Working Hours</strong>
                    </th>
                    <th>
                      <strong>Salary</strong>
                    </th>
                    <th>
                      <strong>Manager</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((e, i) => (
                      <tr key={i}>
                        <td>
                          <strong>{e.emp_id}</strong>
                        </td>
                        <td>{e.employeename}</td>
                        <td>{e.emp_workinghours}</td>
                        <td>{e.emp_salary}</td>
                        <td>
                          <Badge variant="success light">{e.managername}</Badge>
                        </td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              className="light sharp icon-false"
                            >
                              {svg1}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>Edit</Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  ondelete(e.emp_id);
                                }}
                              >
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default EmployeesTable;
