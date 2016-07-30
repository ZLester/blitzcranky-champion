const Image = require('./Image');

exports.getAverageColor = (req, res) => {
  const path = req.body.path;
  Image.getAverageColorByPath(path)
    .then(color => res.json(color))
    .catch(err => res.status(500).json({ error: err.message }));
};
