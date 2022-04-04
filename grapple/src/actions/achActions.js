import axios from "axios";
import {
  ACH_CREATE_FAIL,
  ACH_CREATE_REQUEST,
  ACH_CREATE_SUCCESS,
  ACH_DELETE_FAIL,
  ACH_DELETE_REQUEST,
  ACH_DELETE_SUCCESS,
  ACH_LIST_FAIL,
  ACH_LIST_REQUEST,
  ACH_LIST_SUCCESS,
  ACH_UPDATE_FAIL,
  ACH_UPDATE_REQUEST,
  ACH_UPDATE_SUCCESS,
} from "../constants/achConstants";

export const listAchs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ACH_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/achs`, config);
    dispatch({ type: ACH_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ACH_LIST_FAIL, payload: message });
  }
};

export const createAch = (dataBody) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACH_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    dataBody.user = userInfo._id;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/achs/create", dataBody, config);

    dispatch({ type: ACH_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ACH_CREATE_FAIL, payload: message });
  }
};

export const updateAch = (id, dataBody) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACH_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    dataBody.user = userInfo._id;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/achs/${id}`, dataBody, config);

    dispatch({ type: ACH_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ACH_UPDATE_FAIL, payload: message });
  }
};

export const deleteAch = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACH_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/achs/${id}`, config);

    dispatch({ type: ACH_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ACH_DELETE_FAIL, payload: message });
  }
};
