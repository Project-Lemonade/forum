import Link from "next/link";
import React from "react";
import __Date__ from "./Date";

type QuestionPreviewProps = {
  author: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  id: number;
};

export default function QuestionPreview(props: QuestionPreviewProps) {
  const { id, author, createdAt, title } = props;

  return (
    <Link href={`/questions/${id}`}>
      <div className="preview-question">
        <h3 className="preview-title">{title}</h3>
        <div className="preview-info">
          <div className="question-timestamps">
            <p className="question-created">
              <span className="label">Asked</span>
              <br />
              <__Date__ date={createdAt} />
            </p>
          </div>
          <div className="answer-author">
            <span className="preview-author">Asked by</span>
            <p className="answer-username">{author}</p>
            <img src="/images/profile.png" alt="" className="answer-pfp" />
          </div>
        </div>
      </div>
    </Link>
  );
}
