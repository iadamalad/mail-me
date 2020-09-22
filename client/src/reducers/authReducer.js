import { FETCH_USER } from "../actions/types";
export default function (state = null, action) {
  //state is default to null so when this reducer runs before the fetch_user action is called, the switch
  //statement goes to defualt and returns null, but once the fetch_user action creator gets called we either return the user or false
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
