import React from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import achievements from "../../data/dummyAch";

const MyAchievements = () => {
  var WelcomeStr = "Welcome back";
  var fname = "<whatever>";
  WelcomeStr += ", " + fname + "!";

  const deleteAch = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <MainScreen title={WelcomeStr}>
      <Link to="/addAch">
        <Button style={{ marginBottom: 6 }} variant="success" size="lg">
          Add New Achievement
        </Button>
      </Link>
      {achievements.map((ach) => (
        <Accordion>
          <Accordion.Item eventKey="0">
          <Card style={{ margin: 15 }}>
            <Accordion.Header as={Card.Text} variant="link" eventKey="0" style={{ display: "flex" }}>
            {/* <Card. style={{ display: "flex" }}> */}
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                
                  {ach.title}
                  <Badge pill bg="warning" text="dark" className="mx-3">
                    Points: {ach.points}
                  </Badge>{" "}
              </span>
              <div>
                <Button href={`/ach/${ach._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => {
                    deleteAch(ach._id);
                  }}
                >
                  Delete
                </Button>
              </div>
            {/* </Card.> */}
            </Accordion.Header>
            <Accordion.Body eventKey="0">
              {/* <Card.Body> */}
              <h4>
                <Badge bg="dark" text="light">
                  Category - {ach.category}
                </Badge>
              </h4>

              <blockquote className="blockquote mb-0">
                <p>{ach.desc}</p>
                <footer className="blockquote-footer">
                  Created on - &lt;some date&gt;
                </footer>
              </blockquote>
            {/* </Card.Body> */}
            </Accordion.Body>
          </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyAchievements;
