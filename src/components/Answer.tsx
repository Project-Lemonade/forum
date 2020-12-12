import React, { useEffect, useState } from "react";
import remark from "remark";
import html from "remark-html";
import __Date__ from "./Date";

type AnswerProps = {
  text: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
};

export default function Answer(props: AnswerProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      const parsedContent = await parse(props.text);
      setContent(parsedContent);
    })();
  }, []);

  return (
    <div className="answer">
      <div
        className="answer-text"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className="answer-info">
        <div className="answer-timestamps">
          <p className="answer-created">
            <span className="label">Answered</span>
            <br />
            <__Date__ date={props.createdAt} />
          </p>
          <p className="answer-updated">
            <span className="label">Updated</span>
            <br />
            <__Date__ date={props.updatedAt} />
          </p>
        </div>
        <div className="answer-author">
          <p className="answer-username">{props.authorId}</p>
          <img src="/images/profile.png" alt="" className="answer-pfp" />
        </div>
      </div>
    </div>
  );
}

const parse = async (content: string) => {
  const processedContent = await remark()
    .use(html, {
      sanitize: true,
    })
    .process(content);
  return processedContent.toString();
};
