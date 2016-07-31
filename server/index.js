const app = require('./server');
const logger = require('winston');
const { PORT } = require('./config');

app.listen(PORT, () => {
  logger.info(`Blitzcranky-champion listening on port ${PORT}`);
});
