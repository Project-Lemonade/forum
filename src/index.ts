import { config as dotenv } from "dotenv";
import express from "express";
import session from "express-session";
import next from "next";
import passport from "passport";
import { router as auth } from "./routes/auth";

dotenv();

export const dev = process.env.NODE_ENV !== "production";

(async () => {
  try {
    await import("./strategies/discord");

    const app = next({ dev });
    const handle = app.getRequestHandler();

    const port = process.env.PORT || 3000;

    await app.prepare();

    const server = express();

    server.use(
      session({
        secret: "some random secret",
        cookie: {
          maxAge: 1000 * 60 * 60 * 24,
        },
        saveUninitialized: false,
        resave: false,
      })
    );

    server.use(passport.initialize());
    server.use(passport.session());

    server.use("/auth", auth);

    server.get("/questions", async (req, res) => {
      return res.redirect("/");
    });

    server.get("/questions/:questionId/*", async (req, res) => {
      return res.redirect(`/questions/${req.params.questionId}`);
    });

    server.get("*", async (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => console.log(`Server listening on port ${port}!`));
  } catch (e) {
    console.error(e);
  }
})();
