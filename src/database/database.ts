import { DataTypes, Sequelize } from "sequelize";
import { default as answers } from "./models/Answers";
import { default as questions } from "./models/Questions";
import { default as users } from "./models/Users";

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

const Questions = questions(sequelize, DataTypes);

const Answers = answers(sequelize, DataTypes);

const Users = users(sequelize, DataTypes);

Users.hasMany(Questions, {
  foreignKey: "authorId",
});
Questions.belongsTo(Users);

Users.hasMany(Answers, {
  foreignKey: "authorId",
});
Answers.belongsTo(Users);

Questions.hasMany(Answers, {
  foreignKey: "questionId",
});
Answers.belongsTo(Questions);

export { Users, Questions, Answers };
