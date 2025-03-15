const needle = require('needle');
const args = process.argv.slice(2);
const breedInput = args[0];

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`, (error, response) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    const data = response.body;
    if (data.length > 0) {
      console.log("Description: ", data[0].description);
    } else {
      console.log("Breed not found!");
    }
  }

});
