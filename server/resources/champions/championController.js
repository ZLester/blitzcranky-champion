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

exports.update = (req, res) => {
  Champion.remove({})
    .then(() => League.retrieveFreeChampions())
    .then(freeChampions => {
      return freeChampions
        .map(freeChampion => League.retrieveChampionById(freeChampion.id));
    })
    .then(championRequests => Promise.all(championRequests))
    .then(champions => champions.map(addImageUrls))
    .then(champions => {
      const colorRequests = champions.map(champion => getChampionColors(champion));
      return Promise.all(colorRequests)
        .then(colorsList => colorsList.map((colors, index) => Object.assign({}, champions[index], { colors })));
    })
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
