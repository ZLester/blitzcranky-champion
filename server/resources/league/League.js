const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));
const { LEAGUE_API_KEY } = require('../../config');

class League {
  constructor({ api_key }) {
    this.api_key = api_key;
    if (!this.api_key) {
      throw new Error('No League API Key Provided');
    }
  }

  retrieveChampionIconByKey(key) {
    return `https://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/${key}.png`;
  }

  retrieveChampionBackgroundByKey(key) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`;
  }

  retrieveChampionPicsByKey(key) {
    return {
      icon: this.retrieveChampionIconByKey(key),
      background: this.retrieveChampionBackgroundByKey(key),
    };
  }

  retrieveChampionById(id) {
    return request
      .getAsync(`https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/${id}?champData=blurb,info,lore,tags&api_key=${this.api_key}`)
      .then(response => JSON.parse(response.body));
  }

  retrieveFreeChampions() {
    return request
      .getAsync(`https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=${this.api_key}`)
      .then(response => JSON.parse(response.body))
      .then(data => data.champions);
  }
}

module.exports = new League({ api_key: LEAGUE_API_KEY });
