import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const login = (userId, password) => async (dispatch) => {
  //   event.preventDefault();
  // console.log(userId, password);
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      {
        userId,
        password,
      },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    // console.log(data);
    // setError(false);
    localStorage.setItem("userInfo", JSON.stringify(data));
    // setLoading(false);
  } catch (error) {
    // setError(error.response.data.message);
    // setLoading(false);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register = (dataBody) => async (dispatch) => {
  // handleSubmit = async (data) => {
  // e.preventDefault();

  // alert(JSON.stringify(data, null, 2));
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // setLoading(true);
    const { data } = await axios.post("/api/users", dataBody, config);
    console.log("data from DB", data);
    // setLoading(false);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data, null, 2));
  } catch (error) {
    // console.log(error.response.data.message);
    setTimeout(() => {}, 3000);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  // };
};
