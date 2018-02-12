var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'dA6JHCkXbvJkpGVpj2DVwz9tR',
  consumer_secret: 'Rd73YVRgXOktLvzHC5i1D8tZDyNQ6UKeu2OT6Vi8QVzOeuHMtm'
,
  access_token_key: '	961695293065564160-k3A4vSh6qZ9qZyEd8350FaEbjXWkyZo',
  access_token_secret: 'SIHMPAaROovKWkXG6bm4xQlRFQnTXCKTQ5PtrbByoebWQ'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});