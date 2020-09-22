import "materialize-css/dist/css/materialize.min.css"; //if you do not mention a relative path, webpack assumes you are referncing
//a module so will go in your module packages and find materialize-css
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux"; //provider is a ract component that knows how to changes from redux store, once store gets changed, the provider will notify
//all its children components of the change
import { createStore, applyMiddleware } from "redux"; //front-end uses ES15 import modules, not allowed to execute any type of logic before listing an import
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); //use reduxThunk as a middleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
); //<App/> is a component instance

// console.log("Stripe key is ", process.env.REACT_APP_STRIPE_KEY);
// console.log("Enviroment is", process.env.NODE_ENV);
