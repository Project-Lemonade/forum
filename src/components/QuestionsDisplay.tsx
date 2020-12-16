import Link from "next/link";
import React from "react";
import QuestionPreview from "./QuestionPreview";

type QuestionsDisplayProps = {
  questions: any[];
};

export default function QuestionsDisplay(props: QuestionsDisplayProps) {
  const { questions } = props;

  return (
    <div className="questions-display">
      <div className="questions-header">
        <h1 className="questions-title">Recent Questions</h1>
        <Link href="/ask">
          <button className="question-submit">Ask a question</button>
        </Link>
      </div>
      <hr />
      <div className="recent-questions">
        {questions.map((q: any) => {
          const { id, author, createdAt, title } = q;

          return (
            <QuestionPreview
              id={id}
              title={title}
              author={author.username}
              avatar={author.avatar}
              createdAt={createdAt}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}
