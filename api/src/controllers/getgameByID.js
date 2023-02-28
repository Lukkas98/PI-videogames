const axios = require("axios");
const { API_KEY } = require("../db");

const getGameById = async ( req, res )=>{
    try {
        const { idVideogame } = req.params;
        
        const game = (await axios(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)).data;

        res.status(200).json({
            name: game.name,
            description: game.description,
            image: game.background_image,
            releaseDate: game.released,
            rating: game.rating,
            platforms: game.platforms
        });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = getGameById;