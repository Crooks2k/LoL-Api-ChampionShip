const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const colors = require("colors")
const path = require("path")
// Metadata info about our API

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LoL Champion List | API",
      version: "1.0.0",
      description: `<hr><h3><strong>Api Rest que permite obtener información varia y detallada sobre los personajes de League Of Legends,
      cuenta con varias categorias de información en las que se incluye el origen, posicion, nombre, habilidades detalladas e incluso iconos de habilidades de cada personaje.<strong/></h3>\n
      Podras usar la información que se encuentra alojada en la base de datos de mongo DB para usarla en tu front-end.\n
        - En esta documentación podras encontrar información acerca de cada uno de los endpoints.\n
        - Podras realizar peticiones GET, POST, PUT, DELETE con el fin de probar cada conexion.\n
        - Podras visualizar el esquema de datos usado en la DB [MongoDB] para tenerlo en cuenta a la hora de hacer una insersión de datos POST, PUT, desde el front-end\n<hr>
      Si deseas mas información acerca del proyecto revisa el repositorio en mi perfil de Github [ @Crooks2k ]\n
      https://github.com/Crooks2k/LoL-Api-Champions\n`
  }},
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
