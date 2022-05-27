const express = require("express");
const morgan = require("morgan");
const app = express();


const binance = require("./Routes/binanceAllCriptos");
const coingecko = require("./Routes/coingeckoAllCriptos");
const coinmarketcap = require("./Routes/coinmarketAllCriptos");

require("dotenv").config();
app.use(express.json());
app.use(morgan("dev"));


app.use("/", binance);
app.use("/", coingecko);
app.use("/", coinmarketcap);



app.listen(process.env.PORT, () => {
    console.log("Servidor iniciado en el puerto: "+process.env.PORT);
});

