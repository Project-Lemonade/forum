import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) =>
  sequelize.define("users", {
    id: {
      type: dataTypes.STRING,
      primaryKey: true,
    },
    pfp: {
      type: dataTypes.STRING,
    },
  });
