var path = require('path');

module.exports = function(app) {
  app.get('/', function (req, res) {
      console.log("hit the home route")
      res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
  app.get('/survey', function (req, res) {
      console.log("hit the survey route")
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
};
