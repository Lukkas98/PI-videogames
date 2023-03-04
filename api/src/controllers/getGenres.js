const axios = require("axios");
const { API_KEY, Genres } = require("../db");

const getGenres = async ()=>{
    try {
        const {results} = (await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data
        // console.log(results.length);

        results.forEach( async genre => {
            await Genres.create({
                id: genre.id,
                name: genre.name
           });
        });
        
        return "Genres add to basedata";       
    } catch (error) {
        return error.message;
    }
}

module.exports = getGenres;