import React from "react";
import { Breadcrumb } from "react-bootstrap";

const PageTitle = ({ motherMenu, activeMenu }) => {
  return (
    <div className="page-titles">
      <Breadcrumb>
        <Breadcrumb.Item>{motherMenu}</Breadcrumb.Item>
        <Breadcrumb.Item active href="#">
          {activeMenu}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default PageTitle;
