import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import logo from "../../images/grapple from srs1.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import Resume from "../Resume";

const Header = ({ setSearch }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    // localStorage.removeItem("userInfo");
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                className="d-inline-block align-top img-thumbnail"
                alt="logo"
                width={70}
                height={70}
              />

              <h2 className="d-inline-block align-center m-2 display-5">
                Grapple
              </h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {userInfo && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto my-2 my-lg-0">
                <Nav className="m-auto">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search Here"
                      className="me-2"
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form>
                </Nav>
              </Nav>
              <Nav className="flex-justify-end">
                {/* <PDFDownloadLink
                  document={<Resume />}
                  fileName={userInfo?.fname + "_Resume"}
                >
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "inherit", color: "inherit" }}
                      to="{`/ach/${userInfo._id}`}"
                    >
                      Generate Resume
                    </Link>
                  </Nav.Link>
                </PDFDownloadLink> */}

                <Nav.Link>
                  <Link
                    style={{ textDecoration: "inherit", color: "inherit" }}
                    to="/myachs"
                  >
                    My Achievements
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    style={{ textDecoration: "inherit", color: "inherit" }}
                    to="/leaderboard"
                  >
                    Leaderboard
                  </Link>
                </Nav.Link>

                <NavDropdown
                  title={userInfo?.fname}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item>
                    Your Score: {`${userInfo?.points}`}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
