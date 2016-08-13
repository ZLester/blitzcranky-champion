const Champion = require('./Champion');
const League = require('../league/League');
const { addImageUrls, getChampionColors } = require('../league/leagueUtils.js');

exports.createOne = (req, res) => {
  const newChampion = req.body;
  Champion.create(newChampion)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.retrieve = (req, res) => {
  const query = req.query;
  Champion.find(query)
    .then(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.retrieveOne = (req, res) => {
  const id = req.params.id;
  Champion.findById(id)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateOne = (req, res) => {
  const id = req.params.id;
  const updatedProps = req.body;
  const options = { upsert: true };
  Champion.findByIdAndUpdate(id, updatedProps, options)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Replaces all champions in the database with the current free rotation.
// Utilizes the images module to generate complementary colors for the champion title/name
// This method gets run once daily by the blitzcranky-worker Champion update service
exports.update = (req, res) => {
  // Retrieve the ID's of the free champions for the week.
  // Remove all champions from the database
  Promise.all([League.retrieveFreeChampions(), Champion.remove({})])
    .spread(freeChampions => freeChampions
        // Retrieve detailed information about each free champion.
        .map(freeChampion => League.retrieveChampionById(freeChampion.id)))
    .then(championRequests => Promise.all(championRequests))
    // Add the static imageUrls for each champions' background, icon, and role emblems
    .then(champions => champions.map(addImageUrls))
    .then(champions => {
      // Generate complementary colors for the champion title/name via the images module...
      const colorRequests = champions.map(getChampionColors);
      return Promise.all(colorRequests)
        .then(colorsList => colorsList
          // ...and add those colors to each champion
          .map((colors, index) => Object.assign({}, champions[index], { colors })));
    })
    //  Add the modified champions to the database
    .then(champions => Champion.create(champions))
    .then(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.delete = (req, res) => {
  const query = req.query;
  Champion.find(query)
    .then(champions => Promise.all([champions, Champion.remove(query)]))
    .spread(champions => res.json(champions))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteOne = (req, res) => {
  const id = req.params.id;
  Champion.findByIdAndRemove(id)
    .then(champion => res.json(champion))
    .catch(err => res.status(500).json({ error: err.message }));
};
