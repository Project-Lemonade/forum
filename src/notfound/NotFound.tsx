import * as React from "react";
import "./notfound.css";

export class NotFound extends React.PureComponent {
  render() {
    return (
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
    );
  }
}
