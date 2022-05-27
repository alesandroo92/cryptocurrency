const fetch = require("cross-fetch")
const endpoint = "https://api.coingecko.com/api/v3/coins";


const criptoCoingecko = (req, res) => {
    fetch(endpoint)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log("Ha ocurrido el siguiente error: "+error) )
  
  const mostrarData = (data) => {
      res.status(200).json(data)
  }  
}



module.exports = criptoCoingecko;

