const express = require('express');
const manipulateError = require('./middlewares/manipulateError');
const router = require('./routes');
const manipulate404 = require('./middlewares/manipulate404');

const app = express();

router(app);
app.use(manipulate404);
app.use(manipulateError);

module.exports = app;
