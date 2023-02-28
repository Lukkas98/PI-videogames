const axios = require("axios");
const { API_KEY, Genres } = require("../db");

const getGenres = async (req, res)=>{
    try {
        const {results} = (await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data
        // console.log(results.length);

        results.forEach( async genre => {
            await Genres.create({
                id: genre.id,
                name: genre.name
           });
        });
        
        res.status(200).send("Genres add to basedata");        
    } catch (error) {
        res.status(400).json({err: error});
    }
}

module.exports = getGenres;