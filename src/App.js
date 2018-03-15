import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./globalStyle.css";
import "../node_modules/semantic-ui-css/semantic.min.css";
import { showNotificationWithTimeout } from "./actions/appActions";
import store from "./store";
import RouterContainer from "./router";

class App extends Component {
  componentDidMount() {
    store.dispatch(showNotificationWithTimeout("coucou")).then(() => {});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>{RouterContainer}</BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    app: store.appState.message
  };
};

export default connect(mapStateToProps)(App);
