import React from "react";

import { Link } from "react-router-dom";

import profile from "../../../images/profile/profile.jpg";

const Header = ({ onNote, toggle, onProfile, onNotification, onBox }) => {
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
              >
                ManageCom by Y&H
              </div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown header-profile">
                <Link
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  className={`nav-item dropdown header-profile ${
                    toggle === "profile" ? "show" : ""
                  }`}
                  onClick={() => onProfile()}
                >
                  {" "}
                  <span className="mr-4" style={{ fontSize: 18 }}>
                    Yassine Jebbouri{" "}
                  </span>
                  <img src={profile} width={20} alt="" />
                </Link>
                {/* <div
                  className={`dropdown-menu dropdown-menu-right ${
                    toggle === "profile" ? "show" : ""
                  }`}
                >
                  <Link to="/login" className="dropdown-item ai-icon">
                    <svg
                      id="icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-danger"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1={21} y1={12} x2={9} y2={12} />
                    </svg>
                    <span className="ml-2">Logout </span>
                  </Link>
                </div> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
