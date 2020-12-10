import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import QuestionPreview from "../components/QuestionPreview";
import { Questions } from "../database/database";

type AppProps = {
  data: any;
};

export default function Home(props: AppProps) {
  const questions = JSON.parse(props.data);

  return (
    <Layout>
      <section className="home">
        {questions.map((q: any) => {
          const { id, authorId, question, createdAt, updatedAt } = q;

          //! Find the user

          const preview = question.slice(0, 200);

          return (
            <QuestionPreview
              preview={preview}
              author={authorId}
              createdAt={createdAt}
              updatedAt={updatedAt}
              key={id}
            />
          );
        })}
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const questions = await Questions.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]],
    attributes: [
      "id",
      "title",
      "authorId",
      "question",
      "createdAt",
      "updatedAt",
    ],
  });

  return {
    props: {
      data: JSON.stringify(questions),
    },
  };
};
