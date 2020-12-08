import passport from "passport";
import passportDiscord from "passport-discord";

const DiscordStrategy = passportDiscord.Strategy;

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: process.env.CLIENT_REDIRECT,
      scope: ["identify", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
