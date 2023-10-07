// import { applyMiddleware} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import { rootReducer } from "./root.reducer";

const initialState = {};

// const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
});

export default store;
