const app = require('./server');
const { PORT } = require('./config');

app.listen(PORT, () => {
  console.log(`Blitzcranky-champion listening on port ${PORT}`);
});