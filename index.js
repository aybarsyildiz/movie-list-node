// This product uses the TMDB API but is not endorsed or certified by TMDB

const API_KEY = "ENTER YOUR API_KEY HERE";

module.exports = async function getMovieList(movieOrSeriesName){
    const axios = require("axios");
    var options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+movieOrSeriesName
      };

    axios.request(options).then(function (response) {
        console.log(response.data);
        const responseObject = JSON.parse(response.data);
        return [responseObject.results.picture, responseObject.results.locations.url];
    }).catch(function (error) {
        console.error(error);
    });

};
