import { NextApiRequest, NextApiResponse } from "next";
import { Answers } from "../../database/database";

export default async function answer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const answerId = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  const answer = await Answers.findOne({
    where: {
      id: parseInt(answerId),
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

  if (!answer) return res.json({ data: null });

  res.json({
    data: {
      id: answer.getDataValue("id"),
      questionId: answer.getDataValue("questionId"),
      authorId: answer.getDataValue("authorId"),
      text: answer.getDataValue("text"),
      createdAt: answer.getDataValue("createdAt"),
      updatedAt: answer.getDataValue("updatedAt"),
    },
  });
}
