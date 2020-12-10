import { DataTypes, Sequelize } from "sequelize";

export default function init(
  sequelize: Sequelize,
  dataTypes: typeof DataTypes
) {
  return sequelize.define("questions", {
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
  });
}
