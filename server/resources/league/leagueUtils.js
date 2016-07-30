const League = require('./League');
const Image = require('../images/Image');

exports.addImageUrls = champion => {
  return Object.assign(
    champion,
    League.retrieveChampionPicsByKey(champion.key)
  );
};

exports.getChampionColors = champion => {
  return Image.getTextColorsByPath(champion.icon);
};
