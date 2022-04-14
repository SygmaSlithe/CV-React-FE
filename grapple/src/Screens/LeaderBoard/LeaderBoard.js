import React, { useEffect } from "react";
import { Badge, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { leadList } from "../../actions/userActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const LeaderBoard = () => {
  const dispatch = useDispatch();
  const leaderboard = useSelector((state) => state.leaderboard);
  const { loading, userList, error } = leaderboard;

  const history = useHistory();
  useEffect(() => {
    dispatch(leadList());
  }, [dispatch, history]);

  return (
    <MainScreen title="Leader Board">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <Container
        className="container-sm"
        style={{
          maxWidth: 720,
        }}
      >
        {/* {console.log("userList", userList)} */}
        {userList?.map((user, index) => (
          <Card
            className="py-3"
            variant="dark"
            style={{
              display: "flex",
              margin: 15,
              maxWidth: 720,
            }}
          >
            <div>
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
                <Row>
                  <Col>
                    <Badge pill bg="warning" text="dark" className="mx-3">
                      Rank: {index + 1}
                    </Badge>
                  </Col>
                  <Col>{user.fname + " " + user.lname}</Col>
                  <Col className="justify-content">
                    <Badge pill bg="success" className="mx-3">
                      Points: {user.points}
                    </Badge>
                  </Col>
                </Row>
              </span>
            </div>
          </Card>
        ))}
      </Container>
    </MainScreen>
  );
};
// {
//   `${user.key}`;
// }

export default LeaderBoard;
