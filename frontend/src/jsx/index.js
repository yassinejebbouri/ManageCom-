import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import EmployeesTable from "./components/table/Employees";
import UsersTable from "./components/table/Users";
import InventoryTable from "./components/table/Inventory";
import IngredientsTable from "./components/table/Ingredients";
import ProductsTable from "./components/table/Products";
import Dashboard from "./components/Dashboard/Dashboard";
import ContentManagementTable from "./components/table/ContentManagement";
import StoreLocationTable from "./components/table/StoreLocation";

const Markup = () => {
  const routes = [
    { url: "", component: Dashboard },
    { url: "summary", component: Dashboard },
    { url: "employees", component: EmployeesTable },
    { url: "users", component: UsersTable },
    { url: "inventory", component: InventoryTable },
    { url: "ingredients", component: IngredientsTable },
    { url: "content-management", component: ContentManagementTable },
    { url: "store-locations", component: StoreLocationTable },
    { url: "products", component: ProductsTable },
  ];

  return (
    <Router basename="/">
      
      <Switch>
        <React.Fragment>
          <div id="main-wrapper" className="show">
            <Nav />
            <div className="content-body">
              <div className="container-fluid">
                {routes.map((data, i) => (
                  <Route
                    key={i}
                    exact
                    path={`/${data.url}`}
                    component={data.component}
                  />
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
};

export default Markup;
