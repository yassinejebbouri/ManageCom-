import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import PageTitle from "../../layouts/PageTitle";
import EmployeeModal from "../table/EmployeeModal";
import InventoryModal from "../table/InventoryModal";
import ProductModal from "../table/ProductModal";
import IngredientModal from "../table/IngredientModal";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [employeeModal, setEmployeeModal] = React.useState(false);
  const [inventoryModal, setInventoryModal] = React.useState(false);
  const [ingredientModal, setIngredientModal] = React.useState(false);
  const [productModal, setProductModal] = React.useState(false);

  return (
    <>
      <EmployeeModal
        edit={true}
        active={employeeModal}
        onClick={() => setEmployeeModal(false)}
      />
      <InventoryModal
        edit={true}
        active={inventoryModal}
        onClick={() => setInventoryModal(false)}
      />
      <IngredientModal
        edit={true}
        active={ingredientModal}
        onClick={() => {
          setIngredientModal(false);
          toast("Your changes have been cancelled!");
        }}
      />
      <ProductModal
        edit={true}
        active={productModal}
        onClick={() => setProductModal(false)}
      />
      <PageTitle activeMenu="Summary" motherMenu="ManageCom" />

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="media distance-bx align-items-center">
                <span className="icon bg-warning shadow-warning mr-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip1)">
                      <path
                        d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                        fill="white"
                      />
                      <path
                        d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                        fill="white"
                      />
                      <path
                        d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip1">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="media-body">
                  <h6 className="fs-18 text-black mb-3">
                    Inventory Exits Today
                    <span className="pull-right fs-14 text-dark"></span>
                  </h6>
                  <div className="progress" style={{ height: 9 }}>
                    <div
                      className="progress-bar bg-warning progress-animated"
                      style={{ width: "77%", height: 9 }}
                      role="progressbar"
                    >
                      <span className="sr-only">77% Complete</span>
                      <span className="bg-warning arrow" />
                      <span className="font-w600 counter-bx text-black">
                        <strong className="counter font-w600">77</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="media distance-bx align-items-center">
                <span className="icon bg-info shadow-info mr-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip2)">
                      <path
                        d="M10.8586 5.22593L5.87121 10.5542C5.50758 11.0845 5.64394 11.8067 6.17172 12.1678L11.1945 15.6098L11.1945 18.9557C11.1945 19.5921 11.6995 20.1249 12.3359 20.1376C12.9874 20.1476 13.5177 19.6249 13.5177 18.976L13.5177 15.0012C13.5177 14.6173 13.3283 14.2588 13.0126 14.0441L9.79041 11.8345L12.5025 8.9583L13.8914 12.1224C14.0758 12.5441 14.4949 12.8169 14.9546 12.8169L19.1844 12.8169C19.8207 12.8169 20.3536 12.3118 20.3662 11.6755C20.3763 11.0239 19.8536 10.4936 19.2046 10.4936L15.7172 10.4936C15.2576 9.44818 14.7677 8.41282 14.3409 7.35222C14.1237 6.81686 14.0025 6.58454 13.6036 6.21585C13.5227 6.1401 12.9596 5.62495 12.4571 5.16535C11.995 4.74613 11.2828 4.77391 10.8586 5.22593Z"
                        fill="white"
                      />
                      <path
                        d="M15.6162 5.80675C17.0861 5.80675 18.2778 4.61511 18.2778 3.14514C18.2778 1.67517 17.0861 0.483521 15.6162 0.483521C14.1462 0.483521 12.9545 1.67517 12.9545 3.14514C12.9545 4.61511 14.1462 5.80675 15.6162 5.80675Z"
                        fill="white"
                      />
                      <path
                        d="M4.89899 23.5163C7.60463 23.5163 9.79798 21.323 9.79798 18.6174C9.79798 15.9117 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 -1.81927e-07 15.9117 -2.13831e-07 18.6174C-2.45735e-07 21.323 2.19335 23.5163 4.89899 23.5163Z"
                        fill="white"
                      />
                      <path
                        d="M19.101 23.5163C21.8066 23.5163 24 21.323 24 18.6174C24 15.9117 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9117 14.202 18.6174C14.202 21.323 16.3954 23.5163 19.101 23.5163Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip2">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="media-body">
                  <h6 className="fs-18 text-black mb-3">
                    Inventory Entries Today
                    <span className="pull-right fs-14 text-dark"></span>
                  </h6>
                  <div className="progress" style={{ height: 9 }}>
                    <div
                      className="progress-bar bg-info progress-animated"
                      style={{ width: "75%", height: 9 }}
                      role="progressbar"
                    >
                      <span className="sr-only">28</span>
                      <span className="bg-info arrow" />
                      <span className="font-w600 counter-bx text-black">
                        <strong className="counter font-w600">28</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-5">
          <div className="card">
            <div className="card-header d-sm-flex d-block border-0">
              <div className="mr-auto pr-3">
                <h4 className="text-black fs-20">Recent Transactions</h4>
                <p className="fs-13 mb-0">
                  Here are the latest inventory transactions in your business.
                </p>
              </div>
            </div>
            <PerfectScrollbar className="card-body pt-0 pb-3 dz-scroll  ps ps--active-y">
              <div className="d-flex py-3 border-bottom align-items-center">
                <span className="activity-icon border border-warning border-2 mr-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip3)">
                      <path
                        d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                        fill="#FF9438"
                      />
                      <path
                        d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                        fill="#FF9438"
                      />
                      <path
                        d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                        fill="#FF9438"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip3">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <h6 className="font-w600 fs-16 mb-0">
                    <Link to="/#" className="text-black">
                      Bread
                    </Link>
                  </h6>
                  <span className="fs-12">+23</span>
                </div>
                <Link to="/#" className="ml-auto">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18L15 12L9 6" fill="#D3D6E4" />
                  </svg>
                </Link>
              </div>
              <div className="d-flex py-3 border-bottom align-items-center">
                <span className="activity-icon border border-warning border-2 mr-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip4)">
                      <path
                        d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                        fill="#FF9438"
                      />
                      <path
                        d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                        fill="#FF9438"
                      />
                      <path
                        d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                        fill="#FF9438"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip4">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <h6 className="font-w600 fs-16 mb-0">
                    <Link to="/#" className="text-black">
                      Breadsticks
                    </Link>
                  </h6>
                  <span className="fs-12">5</span>
                </div>
                <Link to="/#" className="ml-auto">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18L15 12L9 6" fill="#D3D6E4" />
                  </svg>
                </Link>
              </div>
              <div className="d-flex py-3 border-bottom align-items-center">
                <span className="activity-icon border border-info border-2 mr-3">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip5)">
                      <path
                        d="M10.8586 5.22593L5.87121 10.5542C5.50758 11.0845 5.64394 11.8067 6.17172 12.1678L11.1945 15.6098L11.1945 18.9557C11.1945 19.5921 11.6995 20.1249 12.3359 20.1376C12.9874 20.1476 13.5177 19.6249 13.5177 18.976L13.5177 15.0012C13.5177 14.6173 13.3283 14.2588 13.0126 14.0441L9.79041 11.8345L12.5025 8.9583L13.8914 12.1224C14.0758 12.5441 14.4949 12.8169 14.9546 12.8169L19.1844 12.8169C19.8207 12.8169 20.3536 12.3118 20.3662 11.6755C20.3763 11.0239 19.8536 10.4936 19.2046 10.4936L15.7172 10.4936C15.2576 9.44818 14.7677 8.41282 14.3409 7.35222C14.1237 6.81686 14.0025 6.58454 13.6036 6.21585C13.5227 6.1401 12.9596 5.62495 12.4571 5.16535C11.995 4.74613 11.2828 4.77391 10.8586 5.22593Z"
                        fill="#1EA7C5"
                      />
                      <path
                        d="M15.6162 5.80675C17.0861 5.80675 18.2778 4.61511 18.2778 3.14514C18.2778 1.67517 17.0861 0.483521 15.6162 0.483521C14.1462 0.483521 12.9545 1.67517 12.9545 3.14514C12.9545 4.61511 14.1462 5.80675 15.6162 5.80675Z"
                        fill="#1EA7C5"
                      />
                      <path
                        d="M4.89899 23.5163C7.60463 23.5163 9.79798 21.323 9.79798 18.6174C9.79798 15.9117 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 -1.81927e-07 15.9117 -2.13831e-07 18.6174C-2.45735e-07 21.323 2.19335 23.5163 4.89899 23.5163Z"
                        fill="#1EA7C5"
                      />
                      <path
                        d="M19.101 23.5163C21.8066 23.5163 24 21.323 24 18.6174C24 15.9117 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9117 14.202 18.6174C14.202 21.323 16.3954 23.5163 19.101 23.5163Z"
                        fill="#1EA7C5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip5">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div>
                  <h6 className="font-w600 fs-16 mb-0">
                    <Link to="/#" className="text-black">
                      Viennoiseries
                    </Link>
                  </h6>
                  <span className="fs-12">-33</span>
                </div>
                <Link to="/#" className="ml-auto">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18L15 12L9 6" fill="#D3D6E4" />
                  </svg>
                </Link>
              </div>
            </PerfectScrollbar>
            <div className="card-footer text-center border-0 pt-0 pb-4">
              <Link
                className="text-primary"
                to="/inventory"
                rel="ajax/recent-activities"
              >
                View more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-xxl-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-sm-flex d-block pb-0 border-0">
                  <div className="d-flex align-items-center">
                    <span className="p-3 mr-3 mb-4 rounded bg-warning">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip1)">
                          <path
                            d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                            fill="white"
                          />
                          <path
                            d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                            fill="white"
                          />
                          <path
                            d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip1">
                            <rect width={24} height={24} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="mr-auto pr-3">
                      <h4 className="text-black fs-20">
                        Inventory Transactions
                      </h4>
                      <p className="fs-13 mb-4 text-black">
                        In your company, you have recorded 902 transactions so
                        far.
                      </p>
                    </div>
                  </div>
                  <Button
                    as="a"
                    style={{ borderWidth: 0 }}
                    className="bg-warning text-white text-center mb-4 d-block rounded"
                    data-toggle="modal"
                    data-target="#editInventory"
                    onClick={() => {
                      setInventoryModal(true);
                    }}
                  >
                    + Record Transaction
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-sm-flex d-block pb-0 border-0">
                  <div className="d-flex align-items-center">
                    <span className="p-3 mr-3 mb-4 rounded bg-success">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip1)">
                          <path
                            d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                            fill="white"
                          />
                          <path
                            d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                            fill="white"
                          />
                          <path
                            d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip1">
                            <rect width={24} height={24} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="mr-auto pr-3">
                      <h4 className="text-black fs-20">Ingredients</h4>
                      <p className="fs-13 mb-4 text-black">
                        In your company, you have 23 ingredients.
                      </p>
                    </div>
                  </div>
                  <Button
                    as="a"
                    style={{ borderWidth: 0 }}
                    className="bg-success text-white text-center mb-4 d-block rounded"
                    data-toggle="modal"
                    data-target="#editIngredient"
                    onClick={() => {
                      setIngredientModal(true);
                    }}
                  >
                    + Add Ingredients
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-sm-flex d-block pb-0 border-0">
                  <div className="d-flex align-items-center">
                    <span className="p-3 mr-3 mb-4 rounded bg-info">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8586 5.22599L5.87121 10.5543C5.50758 11.0846 5.64394 11.8068 6.17172 12.1679L11.1945 15.6098V18.9558C11.1945 19.5921 11.6995 20.125 12.3359 20.1376C12.9874 20.1477 13.5177 19.625 13.5177 18.976V15.0013C13.5177 14.6174 13.3283 14.2588 13.0126 14.0442L9.79041 11.8346L12.5025 8.95836L13.8914 12.1225C14.0758 12.5442 14.4949 12.817 14.9546 12.817H19.1844C19.8207 12.817 20.3536 12.3119 20.3662 11.6755C20.3763 11.024 19.8536 10.4937 19.2046 10.4937H15.7172C15.2576 9.44824 14.7677 8.41288 14.3409 7.35228C14.1237 6.81693 14.0025 6.5846 13.6036 6.21592C13.5227 6.14016 12.9596 5.62501 12.4571 5.16541C11.995 4.74619 11.2828 4.77397 10.8586 5.22599Z"
                          fill="white"
                        />
                        <path
                          d="M15.6162 5.80681C17.0861 5.80681 18.2778 4.61517 18.2778 3.1452C18.2778 1.67523 17.0861 0.483582 15.6162 0.483582C14.1462 0.483582 12.9545 1.67523 12.9545 3.1452C12.9545 4.61517 14.1462 5.80681 15.6162 5.80681Z"
                          fill="white"
                        />
                        <path
                          d="M4.89899 23.5164C7.60463 23.5164 9.79798 21.3231 9.79798 18.6174C9.79798 15.9118 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 0 15.9118 0 18.6174C0 21.3231 2.19335 23.5164 4.89899 23.5164Z"
                          fill="white"
                        />
                        <path
                          d="M19.101 23.5164C21.8066 23.5164 24 21.3231 24 18.6174C24 15.9118 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9118 14.202 18.6174C14.202 21.3231 16.3954 23.5164 19.101 23.5164Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className="mr-auto pr-3">
                      <h4 className="text-black fs-20">Products</h4>
                      <p className="fs-13 mb-4 text-black">
                        In your company, you have 23 products.
                      </p>
                    </div>
                  </div>
                  <Button
                    as="a"
                    style={{ borderWidth: 0 }}
                    className="bg-info text-white text-center mb-4 d-block rounded"
                    data-toggle="modal"
                    data-target="#editProduct"
                    onClick={() => {
                      setProductModal(true);
                    }}
                  >
                    + Add Product
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-sm-flex d-block pb-0 border-0">
                  <div className="d-flex align-items-center">
                    <span className="p-3 mr-3 mb-4 rounded bg-secondary">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip2)">
                          <path
                            d="M11.9997 5.9999C13.6565 5.9999 14.9997 4.65677 14.9997 2.99995C14.9997 1.34312 13.6565 0 11.9997 0C10.3429 0 8.99977 1.34312 8.99977 2.99995C8.99977 4.65677 10.3429 5.9999 11.9997 5.9999Z"
                            fill="white"
                          />
                          <path
                            d="M17.8305 21.8297L14.136 23.2153L15.9733 23.9042C16.7639 24.1978 17.6171 23.791 17.9046 23.0261C18.0576 22.618 18.0124 22.1905 17.8305 21.8297Z"
                            fill="white"
                          />
                          <path
                            d="M5.02674 16.5949C4.2526 16.3078 3.38687 16.6974 3.0954 17.473C2.80464 18.2486 3.19796 19.1128 3.97351 19.4043L5.59177 20.0111L9.86409 18.4088L5.02674 16.5949Z"
                            fill="white"
                          />
                          <path
                            d="M20.9045 17.473C20.613 16.6974 19.7473 16.3078 18.9732 16.5949L6.97342 21.0948C6.19778 21.3863 5.8045 22.2505 6.09527 23.0262C6.38275 23.7908 7.23569 24.198 8.02661 23.9043L20.0264 19.4044C20.802 19.1129 21.1953 18.2487 20.9045 17.473Z"
                            fill="white"
                          />
                          <path
                            d="M22.4997 11.9998H18.9271L16.3417 6.82899C16.073 6.29213 15.5264 5.98627 14.9631 5.99991L11.9997 5.9999L9.0366 5.99991C8.4734 5.98627 7.92754 6.29217 7.65825 6.82899L5.07286 11.9998H1.50019C0.671868 11.9998 0.000244141 12.6714 0.000244141 13.4997C0.000244141 14.328 0.671868 14.9997 1.50019 14.9997H6.00009C6.56845 14.9997 7.08773 14.6789 7.34184 14.1706L8.99999 10.8543V16.483L11.9998 17.6079L14.9999 16.4827V10.8543L16.658 14.1706C16.9122 14.6789 17.4315 14.9997 17.9998 14.9997H22.4997C23.328 14.9997 23.9996 14.328 23.9996 13.4997C23.9996 12.6714 23.3281 11.9998 22.4997 11.9998Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip2">
                            <rect width={24} height={24} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="mr-auto pr-3">
                      <h4 className="text-black fs-20">Employees</h4>
                      <p className="fs-13 mb-4 text-black">
                        In your company, you have 6 employees.
                      </p>
                    </div>
                  </div>
                  <Button
                    as="a"
                    style={{ borderWidth: 0 }}
                    className="bg-secondary text-white text-center mb-4 d-block rounded"
                    data-toggle="modal"
                    data-target="#editEmployee"
                    onClick={() => {
                      setEmployeeModal(true);
                    }}
                  >
                    + Add Employee
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
