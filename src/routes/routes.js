const express = require("express");
const router = express.Router();
const ChampionController = require("../controllers/ChampionController")

router
  .get("/Champions", ChampionController.getChampionList)

  .get("/Champion/:id", ChampionController.getChampionById)

  .post("/newChampion", ChampionController.postNewChampion)

  .put("/Champion/:id", ChampionController.editOneChampion)

  .delete("/RemoveChampion/:id", ChampionController.deleteOneChampion)

module.exports = router;
