import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  user: any;
  isLoggedIn: boolean;
  children: any;
};

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="The official Project Lemonade forums. Join the dicussion today!"
        />
        <meta property="og:image" content="/images/cover.png" />
        <meta
          property="og:description"
          content="The official Project Lemonade forums. Join the dicussion today!"
        />
        <meta property="og:title" content="Project Lemonade Forums" />
        <title>Forums</title>
        <link rel="shortcut icon" href="/images/icon.svg" type="image/x-icon" />
        <script
          src="https://kit.fontawesome.com/563a19917f.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>
      <div className="App">
        <Header isLoggedIn={props.isLoggedIn} user={props.user} />
        <div className="content">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
}
