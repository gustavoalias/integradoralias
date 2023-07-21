const axios = require("axios");

function getCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      const objeto = {
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
        id: data.id,
      };
      return res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(objeto));
    })
    .catch((error) => {
      return res
        .writeHead(500, { "Content-type": "text/plain" })
        .end(error.message);
    });
}

module.exports = {
  getCharById,
};
