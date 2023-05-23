
const {piratebay} = require('piratebay-scraper');

piratebay.search('The Shawshank Redemption 1994').then((res) => console.log(res));