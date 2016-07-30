const express = require('express');
const app = express();

require('./db');
require('./routes')(app);
require('./middleware')(app, express);

module.exports = app;
