import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

class RouterApp extends Component {
  state = {
    token: null,
  };

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    this.setState({ token });
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <li>
              {" "}
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about"> About </Link>{" "}
            </li>
            {this.state.token === null && (
              <>
                <li>
                  {" "}
                  <Link to="/register"> Register </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/login"> Login </Link>{" "}
                </li>
              </>
            )}

            {this.state.token !== null && (
              <>
                <li>
                  {" "}
                  <Link to="/profile"> Profile </Link>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="#"
                    onClick={() => {
                      window.localStorage.removeItem("token");
                      window.location.href = "/";
                    }}
                  >
                    Log out
                  </a>{" "}
                </li>
              </>
            )}
          </nav>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              {this.state.token !== null && (
                <Route path="/profile" exact component={Profile} />
              )}

              {this.state.token === null && (
                <>
                  <Route path="/register" exact component={Register} />
                  <Route path="/login" exact component={Login} />
                </>
              )}
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default RouterApp;
