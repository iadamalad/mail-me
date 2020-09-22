import axios from "axios"; //use axios to make ajax requests
import { FETCH_USER } from "./types";
//actions with default redux are expected to return an action but if you use Redux Thunk, that rule breaks and you don't have to return
//an action with an action creator. With an action creator, you produce an action which goes to the dispatch function(belongs to the redux store)
//That dispatch function forwards the action to all the reducers. Without Redux Thunk, this is automatically done but with Redux Thunk, you can manually
//control this.

export const fetchUser = () =>
  async function (dispatch) {
    //we hooked up Redux thunk as a middleware so when redux thunk gets called, this function will automatically be called and the
    //the dispatch function will be passed as an argument
    const res = await axios.get("/api/current_user"); //we want to dispatch an action only when this ajax request has been completed
    dispatch({ type: FETCH_USER, payload: res.data }); //after we got back a response(res), we let the dispatch function pass the action to reducers
  };

export const handleToken = (token) =>
  async function (dispatch) {
    console.log("hello");
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
