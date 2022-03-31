import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/myachs");
  //   }
  // }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title text">Welcome to Grapple</h1>
              <p
                className="subtitle text"
                style={{
                  fontSize: "2.5vw",
                  top: "70%",
                }}
              >
                Your one stop to start fresh.
              </p>
            </div>
            <div className="buttonContainer">
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-light"
                >
                  Login
                </Button>
              </Link>
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Button size="lg" className="landingButton" variant="success">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
