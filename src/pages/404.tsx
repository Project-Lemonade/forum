import React from "react";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
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
