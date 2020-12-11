import passport from "passport";
import passportDiscord from "passport-discord";
import { Users } from "../database/database";

const DiscordStrategy = passportDiscord.Strategy;

passport.serializeUser<any, string>((user, done) => {
  done(undefined, user.id);
});

passport.deserializeUser<any, string>(async (id, done) => {
  const user = await Users.findOne({
    where: {
      id: id,
    },
  });

  if (user) done(undefined, user);
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: process.env.CLIENT_REDIRECT,
      scope: ["identify"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await Users.findOne({
          where: {
            id: profile.id,
          },
        });

        if (user) {
          done(undefined, user);
        } else {
          const newUser = await Users.create({
            id: profile.id,
            avatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
            username: profile.username,
          });

          done(undefined, newUser);
        }
      } catch (error) {
        console.error(error);
        done(error, undefined);
      }
    }
  )
);
