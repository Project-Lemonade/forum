import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import QuestionsDisplay from "../components/QuestionsDisplay";
import Welcome from "../components/Welcome";
import { Questions, Users } from "../database/database";

type AppProps = {
  data: any;
  isLoggedIn: boolean;
  user: any;
};

export default function Home(props: AppProps) {
  const questions = JSON.parse(props.data);
  const { isLoggedIn } = props;

  return (
    <Layout isLoggedIn={isLoggedIn} user={props.user || null}>
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
      data: JSON.stringify(
        await Promise.all(
          JSON.parse(JSON.stringify(questions)).map(async (q: any) => {
            q.author = await Users.findOne({
              where: {
                id: q.authorId,
              },
            });

            return q;
          })
        )
      ),
      //@ts-ignore
      isLoggedIn: !!ctx.req.user,
      //@ts-ignore
      user: JSON.stringify(ctx.req.user || ""),
    },
  };
};
