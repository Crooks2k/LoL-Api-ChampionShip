const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const colors = require("colors")


// Metadata info about our API

const options = {
  definition: {
    openapi: "3.0.0",
    info: {title: "LoL Champion API", version: "1.0.0"},
  },
  apis: ["src/V1/routes/routes", "src/models/ChampionModel"]
};

// Docs on JSON format
const swaggerSpec = swaggerJSDoc(options)

//function to setup our docs
const swaggerDocs = (app, port) =>{
  app.use("/app/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  app.get("/app/v1/docs.json", (req, res) =>{
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec)
  })
  console.log(`Version 1.0.0 docs are available at: `.green + `http://localhost:${port}/app/v1/docs`.white)
  console.log("-------------------------------------------".blue)
}

module.exports = {swaggerDocs}
