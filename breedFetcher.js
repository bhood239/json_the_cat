const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const bodyObj = JSON.parse(body);
    if (bodyObj.length === 0) {
      callback("breed not found", null);
      return;
    }


    callback(null, bodyObj[0].description);
  });
};

module.exports = {fetchBreedDescription};
