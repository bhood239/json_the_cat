const request = require("request");
const input = process.argv[2];

const fetchSi = function(url) {
  request(`${url}`, (error, response, body) => {

    if (error) {
      console.error("Error: ", error);
      return;
    }

    const bodyObj = JSON.parse(body);
    if (bodyObj.length === 0) {
      console.log("Breed not found");
      return;
    }


    console.log(bodyObj[0].description);
  });
};

fetchSi(`https://api.thecatapi.com/v1/breeds/search?q=${input}`);