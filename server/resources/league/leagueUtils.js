const League = require('./League');
const Image = require('../images/Image');

exports.addImageUrls = champion => {
  return Object.assign(
    champion,
    League.retrieveChampionPics(champion)
  );
};

exports.getChampionColors = champion => {
  return Image.getTextColorsByPath(champion.icon);
};
