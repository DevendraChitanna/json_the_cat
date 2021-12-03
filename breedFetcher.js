const request = require('request');



const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      // console.log("ERROR ERROR", error);
      return callback(error, null);
    }
    //PARSED
    const [data] = JSON.parse(body);



    if (!data) {
      console.log("breed was not found");
      return callback("breed was not found");
    }
    // console.log(data[0].description);
    return callback(null, data.description)
  });
};

module.exports = { fetchBreedDescription };

