import { DataTypes, Sequelize } from "sequelize";

export default function init(
  sequelize: Sequelize,
  dataTypes: typeof DataTypes
) {
  return sequelize.define("users", {
    id: {
      type: dataTypes.STRING,
      primaryKey: true,
    },
    username: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    pfp: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  });
}
