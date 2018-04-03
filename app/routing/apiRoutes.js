var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
  app.get('/api/friends', function(req, res){
   console.log("hit the friends get route");
   res.json(friends)
  });

  app.post('/api/friends', function (req, res) {


    //array method .map
    function convertStringScores(scoresArray){
      var newScores = []
      for(var i = 0; i < scoresArray.length; i++){
        newScores.push(parseInt(scoresArray[i]));
      }
      return newScores;
    }
    console.log(req.body)
    var newFriend = req.body
    newFriend.scores = convertStringScores(req.body.scores);

    var differenceArray =[];


    for(var i=0; i<friends.length; i++){
      var difference = 0;
      for(var j=0; j<friends[i].scores.length; j++){
        var deduction = friends[i].scores[j] - newFriend.scores[j];
        difference += deduction
      }
      differenceArray.push([friends[i]['name'], difference, friends[i]['photo']])
    };

    var leastAmount = differenceArray[0][1];
    var goodFit = differenceArray[0][0];
    var goodFitImage = differenceArray[0][2];
    for(var i=1; i<differenceArray.length; i++){
      if(differenceArray[i][1] < leastAmount) {
        leastAmount = differenceArray[i][1];
        goodFit = differenceArray[i][0];
        goodFitImage = differenceArray[i][2];
      }
    }

    console.log("Your match is " + goodFit + goodFitImage);

    // res.send(goodFit, goodFitImage);
    // res.send(goodFitImage);
    res.json({ goodFitImage: goodFitImage, goodFit: goodFit});

  });



  // app.get('/survey', function(req, res){
  //   res.sendFile(path.join(__dirname, ''))
  // });
}
