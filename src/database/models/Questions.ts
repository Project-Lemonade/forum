import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) =>
  sequelize.define("questions", {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    authorId: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    answers: {
      type: dataTypes.STRING,
      defaultValue: "",
    },
  });
