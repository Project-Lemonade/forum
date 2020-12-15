import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import QuestionsDisplay from "../components/QuestionsDisplay";
import Welcome from "../components/Welcome";
import { Questions } from "../database/database";

type AppProps = {
  data: any;
  isLoggedIn: boolean;
};

export default function Home(props: AppProps) {
  const questions = JSON.parse(props.data);
  const { isLoggedIn } = props;

  return (
    <Layout>
      <section className="home">
        {isLoggedIn ? <QuestionsDisplay questions={questions} /> : <Welcome />}
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const questions = await Questions.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]],
    attributes: ["id", "title", "authorId", "createdAt"],
  });

  return {
    props: {
      data: JSON.stringify(questions),
      isLoggedIn: false,
    },
  };
};
