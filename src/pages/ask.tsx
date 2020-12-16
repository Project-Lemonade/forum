import { GetServerSideProps } from "next";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

type AskProps = {
  isLoggedIn: boolean;
  user: any;
};

export default function Ask(props: AskProps) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const error = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    document.title = "Forums – Ask";
  }, []);

  return (
    <Layout isLoggedIn={props.isLoggedIn} user={props.user}>
      <div className="ask">
        <h1 className="gradient-text">Ask the community!</h1>
        <p className="ask-desc">
          <em>
            Remember to be patient! Be civil with others, and don't forget to
            thank them! Thank you for contributing to Project Lemonade.
          </em>
        </p>
        <form
          action="/"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();

            if (title.length < 16) {
              return setMessage(
                "The title must be at least 16 characters long!"
              );
            }

            if (title.length > 64) {
              return setMessage(
                "The title must be no more than 64 characters in length!"
              );
            }

            if (question.length < 64) {
              return setMessage(
                "Your question should be at least 64 characters!"
              );
            }

            if (question.length > 1024) {
              return setMessage(
                "Sorry, your question has to be at max 1024 characters!"
              );
            }
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setMessage("");
            }}
          />
          <label htmlFor="question">Question</label>
          <textarea
            name="question"
            id="question"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
              setMessage("");
            }}
          ></textarea>
          <span className="error" ref={error}>
            {message}
          </span>
          <input
            type="submit"
            value="Post a question"
            className="question-submit"
          />
        </form>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      //@ts-ignore
      isLoggedIn: !!ctx.req.user,
      //@ts-ignore
      user: JSON.stringify(ctx.req.user || ""),
    },
  };
};
