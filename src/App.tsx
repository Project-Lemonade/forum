import React from "react";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={true} />
        <div className="content"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
