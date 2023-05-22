import React, { Fragment } from "react";
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
import UserModal from "./UserModal";

const UsersTable = () => {
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
  const [userModal, setUserModal] = React.useState(false);

  return (
    <Fragment>
      <UserModal
        edit={true}
        active={userModal}
        onClick={() => setUserModal(false)}
      />
          <PageTitle activeMenu="Users" motherMenu="Data Management" />
          <div className="row">

          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="widget-stat card bg-danger">
              <div className="card-body  p-4">
                <div className="media">
                  <span className="mr-3">
                    <i className="flaticon-381-calendar-1"></i>
                  </span>
                  <div className="media-body text-white text-right">
                    <p className="mb-1">Appointment</p>
                    <h3 className="text-white">76</h3>
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
                    <p className="mb-1">Earning</p>
                    <h3 className="text-white">$56K</h3>
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
                    <p className="mb-1">Total Patient</p>
                    <h3 className="text-white">783K</h3>
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
                    <p className="mb-1">Chef</p>
                    <h3 className="text-white">$76</h3>
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
                Users
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
                  data-target="#editUser"
                  className="plus-icon text-white rounded bg-primary d-flex align-items-center justify-content-center"
                  onClick={() => setUserModal(true)}
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
                      <strong>PATIENT</strong>
                    </th>
                    <th>
                      <strong>DR NAME</strong>
                    </th>
                    <th>
                      <strong>DATE</strong>
                    </th>
                    <th>
                      <strong>STATUS</strong>
                    </th>
                    <th>
                      <strong>PRICE</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>01</strong>
                    </td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      <Badge variant="success light">Successful</Badge>
                    </td>
                    <td>$21.56</td>
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
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>02</strong>
                    </td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      <Badge variant="danger light">Canceled</Badge>
                    </td>
                    <td>$21.56</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="danger"
                          className="light sharp icon-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>03</strong>
                    </td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      <Badge variant="warning light">Pending</Badge>
                    </td>
                    <td>$21.56</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="warning"
                          className="light sharp icon-false"
                        >
                          {svg1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UsersTable;
