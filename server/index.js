const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Settings
app.set('PORT', process.env.PORT || 5000 );

// Database
require('./db/db');

// Routers
const usersRouter = require('./routes/users');
const poolsRouter = require('./routes/pools');
const weeksRouter = require('./routes/weeks');
const teamsRouter = require('./routes/teams');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// React static files
app.use(express.static(path.join(__dirname, './client/build')));

// Sessions
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Api
app.use('/api/users', usersRouter);
app.use('/api/pools', poolsRouter);
app.use('/api/weeks', weeksRouter);
app.use('/api/teams', teamsRouter);

// Start server
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});