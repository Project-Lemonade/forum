import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import icon from "./icon.svg";
import pfp from "./profile.png";

interface IHeaderProps {
  isLoggedIn: boolean;
}

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <div className="logo">
            <img src={icon} alt="logo" />
            <h2>Forums</h2>
          </div>
        </Link>
        <div className="info">
          {this.props.isLoggedIn ? (
            <div className="profile">
              <a href="_____" className="underline">
                Log out
              </a>
              <a href="_____" className="underline">
                Profile
              </a>
              <img src={pfp} alt="user avatar" className="pfp" />
            </div>
          ) : (
            <div className="log-in">
              <a href="_____" className="underline">
                Sign Up
              </a>
              <a href="_____" className="underline">
                Log in
              </a>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
