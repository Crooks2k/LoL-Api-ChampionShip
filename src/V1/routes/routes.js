const express = require("express");
const router = express.Router();
const ChampionController = require("../../controllers/ChampionController")

/**
 * @swagger
 * components:
 *   schemas:
 *     Champion:
 *       type: object
 *       properties:
 *         champion:
 *           type: string
 *           description: The name of the champion
 *         release_date:
 *           type: string
 *           description: The release date of the champion
 *         img:
 *           type: string
 *           description: The image URL of the champion
 *         origen:
 *           type: string
 *           description: The origin of the champion
 *         resource:
 *           type: string
 *           description: The primary resource of the champion (e.g. mana, energy, etc.)
 *         position:
 *           type: array
 *           description: The positions where the champion can be played
 *           items:
 *             type: object
 *             properties:
 *               icon:
 *                 type: string
 *                 description: The icon URL of the position
 *               role:
 *                 type: string
 *                 description: The role of the position (e.g. top, jungle, etc.)
 *               roleP:
 *                 type: string
 *                 description: The role in plural form (e.g. tops, junglers, etc.)
 *         habilities:
 *           type: array
 *           description: The abilities of the champion
 *           items:
 *             type: object
 *             properties:
 *               pasive:
 *                 type: array
 *                 description: The passive ability of the champion
 *                 items:
 *                   type: object
 *                   properties:
 *                     icon:
 *                       type: string
 *                       description: The icon URL of the passive ability
 *                     title:
 *                       type: string
 *                       description: The title of the passive ability
 *                     description:
 *                       type: string
 *                       description: The description of the passive ability
 *               q:
 *                 type: array
 *                 description: The Q ability of the champion
 *                 items:
 *                   type: object
 *                   properties:
 *                     icon:
 *                       type: string
 *                       description: The icon URL of the Q ability
 *                     title:
 *                       type: string
 *                       description: The title of the Q ability
 *                     description:
 *                       type: string
 *                       description: The description of the Q ability
 *               w:
 *                 type: array
 *                 description: The W ability of the champion
 *                 items:
 *                   type: object
 *                   properties:
 *                     icon:
 *                       type: string
 *                       description: The icon URL of the W ability
 *                     title:
 *                       type: string
 *                       description: The title of the W ability
 *                     description:
 *                       type: string
 *                       description: The description of the W ability
 *               e:
 *                 type: array
 *                 description: The E ability of the champion
 *                 items:
 *                   type: object
 *                   properties:
 *                     icon:
 *                       type: string
 *                       description: The icon URL of the E ability
 *                     title:
 *                       type: string
 *                       description: The title of the E ability
 *                     description:
 *                       type: string
 *                       description: The description of the E ability
 *               r:
 *                 type: array
 *                 description: The R ability of the champion
 *                 items:
 *                   type: object
 *                   properties:
 *                     icon:
 *                       type: string
 *                       description: The icon URL of the R ability
 *                     title:
 *                       type: string
 *                       description: The title of the E ability
 *                     description:
 *                       type: string
 *                       description: The description of the E ability
 */
router

/**
 * @swagger
 * /App/Champions:
 *   get:
 *     summary: Get a list of champions
 *     tags: [Consult all champions in DB | Endpoint - Get]
 *     description: Returns a list of champions
 *     responses:
 *       200:
 *         description: get a list of champions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Champion'
 */
  .get("/Champions", ChampionController.getChampionList)


/**
 * @swagger
 * /App/Champion/{id}:
 *   get:
 *     summary: Get a one champion by ID
 *     tags: [Consult one champion by ID in DB | Endpoint - Get / ID]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: string
 *        required: true
 *        description: the champion id
 *     description: Returns a list of champions
 *     responses:
 *       200:
 *         description:  list of champions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Champion'
 */
  .get("/Champion/:id", ChampionController.getChampionById)

/**
 * @swagger
 * /App/newChampion:
 *  post:
 *    summary: create a new champion
 *    tags: [Create a new champion in DB | Endpoint - Post]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Champion'
 *    responses:
 *      200:
 *        description: new champion is created!
 */
  .post("/newChampion", ChampionController.postNewChampion)

/**
 * @swagger
 * /App/Champion/{id}:
 *  put:
 *    summary: edit a champion
 *    tags: [Edit a champion by ID in DB | Endpoint - Put / ID]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: string
 *        required: true
 *        description: the champion id to edit
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/Champion'
 *    responses:
 *      200:
 *        description: a champion is edited!
 */
  .put("/Champion/:id", ChampionController.editOneChampion)

  /**
 * @swagger
 * /App/RemoveChampion/{id}:
 *  delete:
 *    summary: delete a champion
 *    tags: [Delete a champion by ID in DB | Endpoint - Delete / ID]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *        type: string
 *        required: true
 *        description: the champion id to edit
 *    responses:
 *      200:
 *        description: a champion is deleted!
 */
  .delete("/RemoveChampion/:id", ChampionController.deleteOneChampion)

module.exports = router;
