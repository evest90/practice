const request = require('request');
const config = require('../config.js');

let getReposByUsername = (/* TODO */) => {
  console.log('yay!');
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // request({'https://www.googleapis.com/youtube/v3/search', function (error, response, body) {
  //    if (err) {
  //      console.error(err);
  //    } else {
  //      JSON.parse(body);
  //    }
  //   }

  // })

}



module.exports.getReposByUsername = getReposByUsername;