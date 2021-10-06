// This product uses the TMDB API but is not endorsed or certified by TMDB

const API_KEY = "ENTER YOUR API_KEY HERE";

module.exports = async function getMovieList(movieOrSeriesName){
    const axios = require("axios");
    var options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+movieOrSeriesName
      };

    await axios.request(options).then(function (response) {
        var responseDataArr = [response.data.results[0].title, response.data.results[0].vote_average, response.data.results[0].overview];
        console.log(responseDataArr);
        return responseDataArr;

    }).catch(function (error) {
        console.error(error);
    });

};
