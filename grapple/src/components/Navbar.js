import React from "react";
import logo from "./grapple from srs1.png"

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <div class="row g-0">
              <div class="col-md-5 w-auto ms-auto">
                <button type="button " className="btn btn-outline-primary">
                  Sign up
                </button>
                <button type="button" className="btn btn-outline-primary mx-2">
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
