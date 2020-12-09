import React from "react";

interface IHeaderProps {
  isLoggedIn: boolean;
}

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className="header">
        <a href="/">
          <div className="logo">
            <img src="./images/icon.svg" alt="logo" />
            <h2>Forums</h2>
          </div>
        </a>
        <div className="info">
          {this.props.isLoggedIn ? (
            <div className="profile">
              <a href="_____" className="underline">
                Log out
              </a>
              <img src="" alt="user avatar" className="pfp" />
            </div>
          ) : (
            <div className="log-in">
              <a href="/auth" className="underline">
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
