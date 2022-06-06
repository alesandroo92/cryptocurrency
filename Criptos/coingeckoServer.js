const apiCoinGecko = require("../api");


const criptoCoingecko = async (req, res) => {
  const { id } = req.params;
  try {
      const { data } = await apiCoinGecko.get(`coins/${id}`) 

      return res.status(200).send({
          Name: data.name,
          Price: data.market_data.current_price.usd + " dollars",
      })
  } catch (error) {
      return res.status(500).send("Ha sucedido el siguiente error: "+error)
  }
}



module.exports = criptoCoingecko;

