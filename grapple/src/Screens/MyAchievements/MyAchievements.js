import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
// import achievements from "../../data/dummyAch";
import { useDispatch, useSelector } from "react-redux";
import { deleteAch, listAchs } from "../../actions/achActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyAchievements = ({ search }) => {
  const dispatch = useDispatch();
  const achList = useSelector((state) => state.achList);
  const { loading, achs, error } = achList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const achCreate = useSelector((state) => state.achCreate);
  const { success: successCreated } = achCreate;

  const achUpdate = useSelector((state) => state.achUpdate);
  const { success: successUpdated } = achUpdate;

  const achDelete = useSelector((state) => state.achDelete);
  const {
    loading: loadingDelete,
    success: successDeleted,
    error: errorDelete,
  } = achDelete;

  var WelcomeStr = "Welcome back";
  var name = userInfo.fname;
  WelcomeStr += ", " + name + "!";

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAch(id));
    }
  };

  const history = useHistory();
  useEffect(() => {
    dispatch(listAchs());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successCreated,
    successUpdated,
    successDeleted,
  ]);

  // console.log(achs);
  return (
    <MainScreen title={WelcomeStr}>
      <Link to="/createAch">
        <Button style={{ marginBottom: 6 }} variant="success" size="lg">
          Add New Achievement
        </Button>
      </Link>
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loadingDelete && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}

      {achs
        ?.reverse()
        .filter((filteredAch) =>
          filteredAch.achName.toLowerCase().includes(search.toLowerCase())
        )
        .map((ach) => (
          <Accordion>
            <Accordion.Item eventKey={ach._id}>
              <div style={{ margin: 15 }}>
                <Accordion.Header
                  as={Card.Text}
                  variant="link"
                  style={{ display: "flex" }}
                >
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
                    {ach.achName}
                    <Badge pill bg="warning" text="dark" className="mx-3">
                      Points: {ach.points}
                    </Badge>{" "}
                  </span>
                  <div>
                    <Link to={`/ach/${ach._id}`}>
                      <Button>Edit</Button>
                    </Link>

                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => {
                        deleteHandler(ach._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  {/* </Card.> */}
                </Accordion.Header>
                <Accordion.Body>
                  {/* <Card.Body> */}
                  <h4>
                    <Badge bg="dark" text="light">
                      Category - {ach.category}
                    </Badge>
                  </h4>

                  <blockquote className="blockquote mb-0">
                    <p>{ach.desc}</p>
                    <footer className="blockquote-footer">
                      Created on - {ach.createdAt.substring(0, 10)}
                    </footer>
                  </blockquote>
                  {/* </Card.Body> */}
                </Accordion.Body>
              </div>
            </Accordion.Item>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default MyAchievements;
