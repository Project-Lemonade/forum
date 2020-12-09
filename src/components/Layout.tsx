import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: any;
};

export default function Layout(props: LayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <meta
          name="og:image"
          content="https://og-image.now.sh/**Project**%20Lemonade.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&widths=auto&heights=350"
        />
        <meta
          name="og:description"
          content="The official Project Lemonade forums. Join the dicussion today!"
        />
        <meta name="og:title" content="Project Lemonade Forums" />
        <title>Forums</title>
        <link
          rel="shortcut icon"
          href="./images/icon.svg"
          type="image/x-icon"
        />
        <script
          src="https://kit.fontawesome.com/563a19917f.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <div className="content">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
}
