import { GetServerSideProps } from "next";
import absoluteUrl from "next-absolute-url";
import Link from "next/link";
import { useEffect, useState } from "react";
import remark from "remark";
import html from "remark-html";
import __Date__ from "../../components/Date";
import Layout from "../../components/Layout";
import Answer from "./answer";

type QuestionProps = {
  data: any;
};

export default function Question(props: QuestionProps) {
  const { data } = props;

  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      const parsedContent = await parse(props.data.question);
      setContent(parsedContent);
    })();
  }, []);

  return (
    <Layout>
      <article className="question">
        <div className="question-part">
          <h1 className="question-title">{data.title}</h1>
          <div className="question-timestamps">
            <p className="question-created">
              <span className="label">Asked</span>
              <br />
              <__Date__ date={data.createdAt} />
            </p>
            <p className="question-updated">
              <span className="label">Updated</span>
              <br />
              <__Date__ date={data.updatedAt} />
            </p>
          </div>
          <hr />
          <div
            className="question-text"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="answer-author">
            <p className="answer-username">{data.authorId}</p>
            <img src="/images/profile.png" alt="" className="answer-pfp" />
          </div>
        </div>
        <section className="answers">
          {data.answers.map((answer: any) => (
            <Answer
              authorId={answer.authorId}
              text={answer.text}
              createdAt={answer.createdAt}
              updatedAt={answer.updatedAt}
              key={answer.id}
            />
          ))}
        </section>
        <form className="question-form" target="target">
          <textarea className="question-textarea" spellCheck="false"></textarea>
          <input
            type="submit"
            value="Post an answer"
            className="question-submit"
          />
        </form>
        <iframe name="target" hidden></iframe>
        <p className="question-footer">
          Not the answer you're looking for? <br />
          <span className="underline">
            <Link href="/ask">Ask your own question!</Link>
          </span>
        </p>
      </article>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { question: questionId } = ctx.query;

  const { origin } = absoluteUrl(ctx.req);

  const res = await fetch(`${origin}/api/question?id=${questionId}`);
  const json = await res.json();
  const { data } = await json;

  return {
    props: {
      data,
    },
  };
};

const parse = async (content: string) => {
  const processedContent = await remark()
    .use(html, {
      sanitize: true,
    })
    .process(content);
  return processedContent.toString();
};
