import { NextApiRequest, NextApiResponse } from "next";
import { Answers, Questions } from "../../database/database";

export default async function question(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const questionId = Array.isArray(req.query.id)
    ? req.query.id[0]
    : req.query.id;

  const question = await Questions.findOne({
    where: {
      id: parseInt(questionId),
    },
    attributes: [
      "id",
      "title",
      "authorId",
      "question",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!question) return res.json({ data: null });

  const answers = await Answers.findAll({
    where: {
      questionId: parseInt(questionId),
    },
    attributes: [
      "id",
      "questionId",
      "authorId",
      "text",
      "createdAt",
      "updatedAt",
    ],
  });

  res.json({
    data: {
      id: question.getDataValue("id"),
      title: question.getDataValue("title"),
      authorId: question.getDataValue("authorId"),
      question: question.getDataValue("question"),
      createdAt: question.getDataValue("createdAt"),
      updatedAt: question.getDataValue("updatedAt"),
      answers: answers,
    },
  });
}
