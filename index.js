const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

const connectDB = require('./config/db');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const surveyRoutes = require('./routes/surveyRoutes');

connectDB();
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
