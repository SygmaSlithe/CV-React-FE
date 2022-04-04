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

export const achListReducer = (state = { achs: [] }, action) => {
  switch (action.type) {
    case ACH_LIST_REQUEST:
      return { loading: true };
    case ACH_LIST_SUCCESS:
      return { loading: false, achs: action.payload };
    case ACH_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const achCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ACH_CREATE_REQUEST:
      return { loading: true };
    case ACH_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ACH_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const achUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ACH_UPDATE_REQUEST:
      return { loading: true };
    case ACH_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ACH_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const achDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ACH_DELETE_REQUEST:
      return { loading: true };
    case ACH_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ACH_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
