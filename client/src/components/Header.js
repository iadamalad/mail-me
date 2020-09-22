import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    //console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Mail Me
          </Link>
          {/* //a tag navigates to completely different HTML document, navigate to a different route rendered by React Router */}
          <ul className="right">
            <a>{this.renderContent()}</a>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
//same as top
// function mapStateToProps({ auth }) {
//   //{auth} takes the state and gets the object called auth within it
//   return {
//     auth: auth, //since they're the same name, we can return {auth}
//   };
// }
export default connect(mapStateToProps)(Header);
