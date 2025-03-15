const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const breedInput = args[0];

fetchBreedDescription(breedInput, (error, desc) => {
  if (error) {
    console.log('Error fetch details :', error);
  } else {
    console.log(desc);
  }
});