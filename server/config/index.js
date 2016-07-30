module.exports = {
  PORT: process.env.PORT || 3001,
  DB_URI: process.env.MONGODB_URI || 'mongodb://localhost/blitzcranky',
  // Add your API key here when running locally
  LEAGUE_API_KEY: process.env.LEAGUE_API_KEY || null,
};
