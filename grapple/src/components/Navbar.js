import React from "react";
import logo from "../logo.svg"

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="logo"
                width={60}
                height={60}
              />
              <h3 className="d-inline-block align-center">Grapple</h3>
            </a>
            <div className="row g-0">
              <div className="col-md-5 w-auto ms-auto">
                <button type="button " className="btn btn-outline-light">
                  Sign up
                </button>
                <button type="button" className="btn btn-outline-light mx-2">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
