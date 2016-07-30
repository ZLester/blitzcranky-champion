const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { DB_URI } = require('../config');

const connection = mongoose.connect(DB_URI);

module.exports = connection;
