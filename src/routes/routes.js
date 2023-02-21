const express = require("express");
const router = express.Router();
const ChampionController = require("../controllers/ChampionController")

router
  .get("/Champions", ChampionController.getChampionList)
  .post("/newChampion", ChampionController.postNewChampion)
  .put("/Champion/:id")
  .delete("/RemoveChampion")

module.exports = router;
