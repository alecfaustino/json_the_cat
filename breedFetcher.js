const needle = require('needle');

const fetchBreedDescription = (breedInput, callback) => {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`, (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      const data = response.body;
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback(null, "Breed Not Found!");
      }
    }
  
  });
  
};

module.exports = {
  fetchBreedDescription,
};