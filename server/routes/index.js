const championRouter = require('../resources/champions/championRouter');

module.exports = app => {
  app.use('/api/champions', championRouter);
};
