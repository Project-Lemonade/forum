import React from "react";
import "../styles/answer.css";
import "../styles/App.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/notfound.css";
import "../styles/question.css";

type AppProps = {
  Component: any;
  pageProps: any;
};

export default function App(props: AppProps) {
  return <props.Component {...props.pageProps} />;
}
