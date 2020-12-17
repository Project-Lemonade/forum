import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/Layout";

type NotFoundProps = {
  isLoggedIn: boolean;
  user: any;
};

export default function NotFound(props: NotFoundProps) {
  return (
    <Layout isLoggedIn={props.isLoggedIn} user={props.user}>
      <div className="not-found">
        <div>
          <h1>404</h1>
          <hr />
          <p>
            Page not found. <br />
            Maybe go <a onClick={() => window.history.back()}>back</a> instead?
          </p>
        </div>
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
