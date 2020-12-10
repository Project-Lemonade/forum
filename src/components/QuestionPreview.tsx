import Link from "next/link";
import React from "react";

type QuestionPreviewProps = {
  author: string;
  createdAt: string;
  updatedAt: string;
  preview: string;
  id: number;
};

export default function QuestionPreview(props: QuestionPreviewProps) {
  const { id, author, createdAt, preview, updatedAt } = props;

  //! Add CSS

  return (
    <Link href={`/questions/${id}`}>
      <div className="preview-question">
        {author} {preview} {createdAt} {updatedAt}
      </div>
    </Link>
  );
}
