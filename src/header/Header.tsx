import React from "react";
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
        <div className="logo">
          <img src={icon} alt="logo" />
        </div>
        <div className="info">
          {this.props.isLoggedIn ? (
            <div className="profile">
              <a href="_____">Profile</a>
              <img src={pfp} alt="user avatar" className="pfp" />
            </div>
          ) : (
            <div>
              <a href="_____">Log in</a>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
