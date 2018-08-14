import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

// import components
import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Main>
              <Route exact path="/" component={PhotoGrid} />
              <Route path="/s/:code" component={Single} />
            </ Main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
