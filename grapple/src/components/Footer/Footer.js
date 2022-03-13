import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer
        className="footer"
        style={{
          backgroundColor: "lightgray",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row className="text-center py-3">
            <Col>All rights reserved.</Col>

            <Col>&copy; Copyright Grapple 2022</Col>

            <Col>
              <Container>
                <Row>
                  <Col>
                    <a href='#'>Twitter</a>
                  </Col>
                   |
                  <Col>
                    <a href='#'>Instagram</a>
                  </Col>
                  |
                  <Col>
                    <a href='#'>LinkedIn</a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
