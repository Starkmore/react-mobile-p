import React, { Component } from "react";
import Router from "./router/index.js";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router />
    )
  }
}

export default App;
