import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="App">
      <Router>
        <Header className="Header" />

        {/* Header */}
        {/* Recommended Videos */}
        <Switch>
          <Route path="/trending">
            <div className="trending-page">
              <Sidebar />
              <h1>this is is trending</h1>
            </div>
          </Route>

          <Route path="/subscriptions">
            <div className="subscription-page">
              <Sidebar />
              this is sub
            </div>
          </Route>

          <Route path="/">
            <div className="home-page">
              {/* <Sidebar /> */}
              <Sidebar />
              <Home />
              <h1>this is home</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
