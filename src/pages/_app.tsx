import React from "react";
import "../styles/answer.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/notfound.css";
import "../styles/question.css";
import "../styles/questiondisplay.css";
import "../styles/questionpreview.css";
import "../styles/style.css";
import "../styles/welcome.css";

type AppProps = {
  Component: any;
  pageProps: any;
};

export default function App(props: AppProps) {
  return <props.Component {...props.pageProps} />;
}
