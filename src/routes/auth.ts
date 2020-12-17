import express from "express";
import passport from "passport";

export const router = express.Router();

router.get("/", passport.authenticate("discord"));

router.get("/logout", (req, res) => {
  if (req.user) req.logOut();

  res.redirect("/");
});

router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/",
  })
);

router.get("*", (req, res) => {
  res.redirect("/");
});
