const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };
    return res.status(200).json(character);
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send("Character not found")
      : res.status(500).send(error?.response?.data?.error);
  }
};

module.exports = {
  getCharById,
};

// const axios = require("axios");

// function getCharById(res, id) {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {
//       console.log(data);
//       const objeto = {
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin.name,
//         image: data.image,
//         status: data.status,
//         id: data.id,
//       };
//       return res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(objeto));
//     })
//     .catch((error) => {
//       return res
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(error.message);
//     });
// }

// module.exports = {
//   getCharById,
// };
