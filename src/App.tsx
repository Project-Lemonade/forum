import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./home/Home";
import { NotFound } from "./notfound/NotFound";

type AppProps = {};

type AppState = {
  isLoggedIn: boolean;
};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header isLoggedIn={this.state.isLoggedIn} />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
