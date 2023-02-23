const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const colors = require("colors")
const path = require("path")
// Metadata info about our API

const options = {
  definition: {
    openapi: "3.0.0",
    info: {title: "LoL Champion List | API", version: "1.0.0"},
  },
  apis: [`${path.join(__dirname, "../V1/routes/*.js")}`],
  servers: [
    {
      url: "http://localhost:3030"
    }
  ]
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
