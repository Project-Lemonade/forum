import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  storage: "database.sqlite",
});

try {
  (async () => {
    const Questions = (await import("./models/Questions")).default(
      sequelize,
      DataTypes
    );
    const Answers = (await import("./models/Answers")).default(
      sequelize,
      DataTypes
    );
    const Users = (await import("./models/Users")).default(
      sequelize,
      DataTypes
    );

    const force =
      process.argv.includes("--force") || process.argv.includes("-f");

    await sequelize.sync({ force });

    await Questions.upsert({
      authorId: "123456789123456789",
      title: "my first question",
      question: "**markdown** is *supported*",
    });

    console.log("Database synced");
    sequelize.close();
  })();
} catch (e) {
  console.error(e);
}
