import Nav from "./Nav";
import Companies from "../views/Companies";
import DataTypes from "../views/DataTypes";
import Main from "../views/Main";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = (props) => {
  return (
    <Router>
      <Nav />

      <Route exact path="/" component={Main} />

      <Route path="/companies" component={Companies} />

      <Route path="/data-types" component={DataTypes} />
    </Router>
  );
};

export default Routes;
