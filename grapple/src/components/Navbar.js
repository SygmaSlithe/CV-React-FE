import React from "react";
import logo from "../images/grapple from srs1.png"

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
                className="d-inline-block align-top img-thumbnail"
                alt="logo"
                width={130}
                height={130}
              />
              <h1 className="d-inline-block align-center m-2 display-1">Grapple</h1>
            </a>
            <div className="row g-0">
              <div className="col-md-5 w-auto ms-auto ">
                <button 
                  type="button " 
                  className="btn btn-outline-success" 
                >
                  Sign up
                </button>
                <button type="button" className="btn btn-outline-light mx-4">
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
