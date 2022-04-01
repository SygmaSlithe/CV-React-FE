import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

const LoginScreen = ({ history }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userInfo) {
      history.push("/myachs");
    }
  }, [history, userInfo]);

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(login(userId, password));
    // console.log(userId, password);
    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };

    //   setLoading(true);
    //   const { data } = await axios.post(
    //     "/api/users/login",
    //     {
    //       userId,
    //       password,
    //     },
    //     config
    //   );
    //   console.log(data);
    //   setError(false);
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   setLoading(false);
    // } catch (error) {
    //   setError(error.response.data.message);
    //   setLoading(false);
    // }
  };

  return (
    <MainScreen title="Login">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading ? (
          <Loading />
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicUserId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                value={userId}
                placeholder="Enter User ID"
                onChange={(event) => setUserId(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="dark" className="mt-2">
              Submit
            </Button>
          </Form>
        )}
        <Row className="py-3">
          <Col>
            New to Grapple? No Worries, you can{" "}
            <Link to="/register"> register here</Link>!
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
