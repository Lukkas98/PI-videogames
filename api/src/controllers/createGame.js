const {Videogame, Genres} = require("../db")

const createGame = async(req, res)=>{
    try {
        const {
            name, description, platforms, image, releaseDate, rating, genres
        } = req.body;

        if (!name || !description || !platforms || !image || !releaseDate || !rating || !genres) {
            throw new Error("Faltan Datos")
        }
        const game = await Videogame.create({
            name,
            description,
            platforms,
            image,
            releaseDate,
            rating
          });
      
          // Agregar las relaciones con los géneros
          const genresToAdd = await Genres.findAll({ where: { name: genres } });
          await game.addGenres(genresToAdd);
      
          res.status(200).json( game.dataValues );
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
};

module.exports = createGame;