import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
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
              <a href="/login">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-light"
                >
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingButton" variant="success">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
