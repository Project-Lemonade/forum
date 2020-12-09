import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

export default await (async () => {
  const Questions = (await import("./models/Questions")).default(
    sequelize,
    DataTypes
  );

  const Answers = (await import("./models/Answers")).default(
    sequelize,
    DataTypes
  );

  const Users = (await import("./models/Users")).default(sequelize, DataTypes);

  Users.hasMany(Questions, {
    as: "userQuestions",
  });
  Questions.belongsTo(Users);

  Users.hasMany(Answers, {
    as: "userAnswers",
  });
  Answers.belongsTo(Users);

  Questions.hasMany(Answers, {
    as: "questionAnswers",
  });
  Answers.belongsTo(Questions);

  return { Users, Questions, Answers };
})();
