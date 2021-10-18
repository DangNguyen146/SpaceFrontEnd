import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routeHome } from "./router";

import BackToTop from "./components/BackToTop";

import HomeTemplate from "./container/HomeTemplate";

import PageNotFound from "./container/PageNotFound";

class App extends Component {
  render() {
    const showLayoutHome = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };
    return (
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routeHome)}
          <Route path="" component={PageNotFound} />
        </Switch>
        <BackToTop />
      </BrowserRouter>
    );
  }
}

export default connect()(App);
