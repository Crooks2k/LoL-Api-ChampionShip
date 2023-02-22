const Champions = require("../models/ChampionModel")

//find all elements
exports.getChampionList = async (req, res) => {
  try {
    const result = await Champions.find(); //Consult in DataBase
    res.status(200).json(result);  // If not have a error, Returns status 200 (OK) and json with req result
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' }); // iff have error return status 500 ( Internal Server Error) and Json with message "Error interno del servidor"
}};

//find one champion by id
exports.getChampionById = async (req, res) => {
  try {
    const result = await Champions.findById(req.params.id); //find by id in database (in /champions:id req.params.id = :id)
    if (result) {
      res.status(200).json(result); // If not have a error, Returns status 200 (OK) and json with req result
    } else {
      res.status(404).json({ error: 'Campeón no encontrado' }); //if champ not found return 404 error and json with message "Campeón no encontrado"
    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' }); // iff have error return status 500 ( Internal Server Error) and Json with message "Error interno del servidor"
  }
};

//post new champion in DB
exports.postNewChampion = async (req, res) => {
  try {
    const result = await Champions.create(req.body); //process data in req body and use this data to create new champion in DB
    res.status(200).json(result); // If not have a error, Returns status 200 (OK) and json with req result
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' }); // iff have error, return status 500 ( Internal Server Error) and Json with message "Error interno del servidor"
  }
};

//edit a champion in DB
exports.editOneChampion = async (req, res) => {
  try{
    const result = await Champions.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}) //find item by id and edit changes [req.body], new: true is used to return edit object in result
    if (result) {
      res.status(200).json(result); // If not have a error, Returns status 200 (OK) and json with req result
    } else {
      res.status(404).json({ error: 'Campeón no encontrado' }); //if champ not found return 404 error and json with message "Campeón no encontrado"
    }
  }catch (err){
    res.status(500).json({ error: 'Error interno del servidor' }); // iff have error return status 500 ( Internal Server Error) and Json with message "Error interno del servidor"
  }
}

//delete a champion in DB
exports.deleteOneChampion = async (req, res) => {
  try{
    const result = await Champions.findOneAndDelete({_id: req.params.id}); //search _id and remove (in /RemoveChampion:id req.params.id = :id)
    if (result) {
      res.status(200).json(result); // If not have a error, Returns status 200 (OK) and json with req result
    } else {
      res.status(404).json({ error: 'Campeón no encontrado' }); //if champ not found return 404 error and json with message "Campeón no encontrado"
    }
  }catch (err){
    res.status(500).json({ error: 'Error interno del servidor' }); // iff have error return status 500 ( Internal Server Error) and Json with message "Error interno del servidor"
  }
}
