import { DataTypes, Sequelize } from "sequelize";

export default function init(
  sequelize: Sequelize,
  dataTypes: typeof DataTypes
) {
  return sequelize.define("answers", {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    questionId: {
      type: dataTypes.INTEGER,
      allowNull: false,
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
}
