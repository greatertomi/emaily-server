const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// Recieves user model and done
passport.serializeUser(() => {});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
      // Check if profile.id exists in the database
      // Save profile.id to our database
      const userId = null;
      done(null, userId);
    }
  )
);
