import Link from "next/link";
import React from "react";

interface HeaderProps {
  isLoggedIn: boolean;
  user: any;
}

export default function Header(props: HeaderProps) {
  const { user } = props;

  return (
    <header className="header">
      <Link href="/">
        <div className="logo">
          <img src="/images/icon.svg" alt="logo" />
          <h2>Forums</h2>
        </div>
      </Link>
      <div className="info">
        {props.isLoggedIn ? (
          <div className="profile">
            <div className="underline">
              <Link href="/auth/logout">Log out</Link>
            </div>
            <img
              src={JSON.parse(user).avatar}
              alt="user avatar"
              className="pfp"
            />
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
