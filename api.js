const axios = require("axios");

const apiCoinGecko = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
})


module.exports = apiCoinGecko;