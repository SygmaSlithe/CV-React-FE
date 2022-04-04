import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
  achCreateReducer,
  achDeleteReducer,
  achListReducer,
  achUpdateReducer,
} from "./reducers/achReducers";

const reducer = combineReducers({
  // will contail reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  achList: achListReducer,
  achCreate: achCreateReducer,
  achUpdate: achUpdateReducer,
  achDelete: achDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//import this store and wrap app at index.js with <Producer store={store}>
export default store;
