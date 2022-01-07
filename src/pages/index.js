/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./views/Index";
import Landing from "./landing-page";
import Login from "./login-page";
import Profile from "./profile-page";
import Register from "./register-page";

const App = () => {
  return <Router>
    <Index
      path="/"
    />
    <Landing
      path="/landing-page"
    />
    <Login
      path="/login-page"
    />
    <Profile
      path="/profile-page"
    />
    <Register
      path="/register-page"
    />
  </Router>
}

export default App