const axios = require("axios");
const { API_KEY } = require("../db");
const { Videogame } = require("../db")

const URL =  `https://api.rawg.io/api/games?key=${API_KEY}`;

const getAllVideogames = async (url, videogames = [])=>{
    try {
        if(videogames.length >= 100) return videogames;
        const {next, results} = (await axios(url)).data;

        results.forEach( game => {
            videogames.push({
                name: game.name,
                description: game.description,
                platforms: game.platforms,
                image: game.background_image,
                releaseDate: game.released,
                rating: game.rating
            })
        });
        return getAllVideogames(next, videogames);
    } catch (err) {
        return {err: err.message};
    }
};

const getGamesByName = async (name, videogames = [])=>{
    try {
        // if (videogames.length >= 15) return videogames; 
        let games = await Videogame.findAll();
        games.forEach( game => {
            if(game.dataValues.name.toLowerCase().includes(name)) videogames.push(game.dataValues);
        })

        games =  await getAllVideogames(URL);
        
        games.forEach( game => {
            if(videogames.length >= 15) return videogames
            if(game.name.toLowerCase().includes(name)) videogames.push(game)
        })

        return videogames;

    } catch (error) {
        return {err: error.message }
    }
}




const getGames = async (req, res)=>{
    try {
        const { name } = req.query;


        if (!name) {
            const AllVideogames = await getAllVideogames(URL);
            
            res.status(200).json(AllVideogames);
        }else{
            const AllVideogames = await getGamesByName(name.toLowerCase());

            console.log(AllVideogames.length, " LARGO DEL ARRAY");

            res.status(200).json(AllVideogames);
        }


        
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = getGames;