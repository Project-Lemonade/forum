import { config as dotenv } from "dotenv";
import express from "express";
import session from "express-session";
import passport from "passport";
import { router as auth } from "./routes/auth";

dotenv();

(async () => {
  await import("./strategies/discord");

  const app = express();
  const port = process.env.PORT || 3001;

  app.use(
    session({
      secret: "some random secret",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
      saveUninitialized: false,
      resave: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/auth", auth);

  app.listen(port, () => console.log(`Server listening on port ${port}!`));
})();
