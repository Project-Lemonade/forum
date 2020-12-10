import Link from "next/link";
import React from "react";

interface IHeaderProps {
  isLoggedIn: boolean;
}

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className="header">
        <Link href="/">
          <div className="logo">
            <img src="/images/icon.svg" alt="logo" />
            <h2>Forums</h2>
          </div>
        </Link>
        <div className="info">
          {this.props.isLoggedIn ? (
            <div className="profile">
              <a href="_____" className="underline">
                Log out
              </a>
              <img src="" alt="user avatar" className="pfp" />
            </div>
          ) : (
            <div className="log-in underline">
              <Link href="/auth">Log in</Link>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
