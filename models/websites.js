const storage_key = 'websites';

var persist = require('./persist');

function getWebsites()
{
  return persist.storage.getItem(storage_key) || {};
}

function addWebsite(route, media)
{
  var websites = getWebsites();
  websites[route] = {'media': media, 'route':route};
  persist.storage.setItem(storage_key, websites);
}

exports.getWebsites = getWebsites;
exports.addWebsite = addWebsite;