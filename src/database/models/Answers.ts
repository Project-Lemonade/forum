import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) =>
  sequelize.define("answers", {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    authorId: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
  });
