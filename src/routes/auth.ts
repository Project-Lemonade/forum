import express from "express";
import passport from "passport";

export const router = express.Router();

router.get("/", passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "/success",
  }),
  (req, res) => {
    res.send(200);
  }
);
