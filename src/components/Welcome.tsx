import React, { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    document
      .querySelectorAll("div.splash div *")
      .forEach((e) => e.classList.add("show"));
  });

  return (
    <div className="welcome">
      <div className="splash">
        <div>
          <h1>Project Lemonade</h1>
          <h2>Forums</h2>
          <hr />
          <p>Post a question, receive an answer.</p>
        </div>
      </div>
      <div className="start-now">
        <h2 className="why-title">Why join?</h2>
        <p className="why-start">
          Be apart of a growing community and
          <strong> help Project Lemonade expand!</strong> Contribute to our
          forum and support the project by asking (or answering) questions!
          <em>
            {" "}
            We like hearing from our community and wear it like a badge.{" "}
          </em>
          Do us a favor and start right now!
        </p>
        <p className="why-start">
          With you, our little startup could be
          <em> more than just a startup.</em> We believe our community is our
          strength. We believe people can do more things together, and that is
          why we want you to join!{" "}
          <strong>
            Before joining, kindly review these simple guidelines:
          </strong>
        </p>
        <img src="/images/guidelines.png" alt="" />
      </div>
      <div className="start-now">
        <h2 className="why-title">Let's get started!</h2>
        <p className="why-start">
          Alrighty then, with that out of the way, let's get the ball rolling!{" "}
          <strong>
            If you want, you can post an introductory question about you, and
            what you person you are!{" "}
          </strong>{" "}
          Whatever you want that you think makes you special and unique!
        </p>
        <img src="/images/answer.png" alt="" />
        <p className="why-start">
          Markdown is supported, so you may use it if you wish. Remember to
          reply nicely to questions, and always structure your question so other
          people can easily answer them.{" "}
          <em>
            Thank you for your time, and many thanks for joining the Project
            Lemonade forums!
          </em>
        </p>
      </div>
    </div>
  );
}
