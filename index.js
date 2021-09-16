module.exports = async function getMovieList(movieOrSeriesName){
    var options = {
        method: 'GET',
        url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
        params: {term: movieOrSeriesName},
        headers: {
          'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
          'x-rapidapi-key': '0e594be67dmsh4b7905e293075c6p1c934bjsn89e25fa7afe1'
        }
      };

    axios.request(options).then(function (response) {
        console.log(response.data);
        const responseObject = JSON.parse(response.data);
        return [responseObject.results.picture, responseObject.results.locations.url];
    }).catch(function (error) {
        console.error(error);
    });

};