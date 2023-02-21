const Champions = require("../models/ChampionModel")


exports.getChampionList = ((req, res) => { //asign function to getChampionList
  Champions.find((err, result) => {    // Consulting data base
      if(err) throw new Error(err);
      res.json(result);  // Define & return the result in json
  });
});

exports.postNewChampion = ((req, res) => {
  Champions.create(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});
