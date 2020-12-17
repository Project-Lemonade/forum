import { GetServerSideProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import remark from "remark";
import html from "remark-html";
import Answer from "../../components/Answer";
import __Date__ from "../../components/Date";
import Layout from "../../components/Layout";
import { Answers, Questions, Users } from "../../database/database";

type QuestionProps = {
  data: any;
  isLoggedIn: boolean;
  user: any;
};

export default function Question(props: QuestionProps) {
  const { data, isLoggedIn, user } = props;

  const author = JSON.parse(data.author);

  if (!data) return <div></div>;

  const [content, setContent] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const parsedContent = await parse(props.data.question);
      setContent(parsedContent);
      document.title = "Forums – " + data.title;
    })();
  }, []);

  return (
    <Layout isLoggedIn={isLoggedIn} user={user}>
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
            <p className="answer-username">{author.username}</p>
            <img src={author.avatar} alt="" className="answer-pfp" />
          </div>
        </div>
        <section className="answers">
          {JSON.parse(data.answers).map((answer: any) => (
            <Answer
              author={answer.author.username}
              avatar={answer.author.avatar}
              text={answer.text}
              createdAt={answer.createdAt}
              updatedAt={answer.updatedAt}
              key={answer.id}
            />
          ))}
        </section>
        <form
          className="question-form"
          target="target"
          onSubmit={(e) => {
            e.preventDefault();

            if (answer.length < 32) {
              return setError(
                "Your answer must be at least 32 characters long!"
              );
            }

            if (answer.length > 512) {
              return setError(
                "Your answer must be no longer than 512 characters!"
              );
            }
          }}
        >
          <textarea
            className="question-textarea"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              setError("");
            }}
          ></textarea>
          <span className="error">{error}</span>
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

  const question = await Questions.findOne({
    where: {
      id: parseInt(Array.isArray(questionId) ? questionId[0] : questionId!),
    },
    attributes: ["title", "authorId", "question", "createdAt", "updatedAt"],
  });

  if (!question) return { props: { data: null } };

  const questionAuthor = await Users.findOne({
    where: {
      //@ts-ignore
      id: question.authorId,
    },
    attributes: ["username", "avatar"],
  });

  //@ts-ignore
  question.questionAuthor = questionAuthor;

  const answers = await Answers.findAll({
    where: {
      questionId: parseInt(
        Array.isArray(questionId) ? questionId[0] : questionId!
      ),
    },
    order: [["createdAt", "DESC"]],
    attributes: ["authorId", "text", "createdAt", "updatedAt"],
  });

  answers.forEach(async (a) => {
    const author = await Users.findOne({
      where: {
        //@ts-ignore
        id: a.authorId,
      },
      attributes: ["username", "avatar"],
    });
    //@ts-ignore
    a.author = author;
  });

  return {
    props: {
      data: {
        title: question.getDataValue("title"),
        //@ts-ignore
        author: JSON.stringify(question.questionAuthor),
        question: question.getDataValue("question"),
        createdAt: question.getDataValue("createdAt").toJSON(),
        updatedAt: question.getDataValue("updatedAt").toJSON(),
        answers: JSON.stringify(answers),
      },
      //@ts-ignore
      isLoggedIn: !!ctx.req.user,
      //@ts-ignore
      user: JSON.stringify(ctx.req.user),
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
