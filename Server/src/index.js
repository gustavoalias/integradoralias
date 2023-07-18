const http = require("http");
const { log } = require("console");
const { getCharById } = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // if (req.url.includes("/rickandmorty/character")) {
    //   const idPersonaje = Number(req.url.split("/").at(-1));
    //   const personajeEncontrado = data.find((obj) => obj.id === idPersonaje);

    //   if (personajeEncontrado) {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     return res.end(JSON.stringify([personajeEncontrado]));
    //   }
    // }

    // // Si no se encontró el personaje, se puede enviar una respuesta de error
    // res.writeHead(404, { "Content-Type": "application/json" });
    // const errorRespuesta = JSON.stringify({
    //   error: "No se encontró el personaje",
    // });
    // res.end(errorRespuesta);

    if (req.url.includes("/rickandmorty/character")) {
      let id = req.url.split("/").at(-1);
      return getCharById(res, id);
    }

    return res
      .writeHead(404, {
        "Content-type": "text/plain",
      })
      .end("No response");
  })
  .listen(3001, "localhost");
