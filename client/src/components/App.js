import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; //BrowserRouter is the like the brains of the router, it's what looks at the url and says this
//component has to change or these actions must take place, route, on the other hand, is a componenet which is used to set up a rule between a certain route
//and a certain set of components
//this Route component targets the home/root route and renvers the landing component when a user goes there
//browswer router takes only one child
import { connect } from "react-redux"; //used to connect the app componenet to the redux store
import * as actions from "../actions"; //importing the actions from the actions file, automaically goes into index.js
//react-router will look at your route and see if that route contains a path in it, then it will display the component so "/" path will always show its component
//exact solves the problem above and makes browswer router look for exact path
import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);
