const criptoBinance = require("../Criptos/binanceServer");
const express = require("express");
const router = express.Router();

router.get("/binance", criptoBinance);


module.exports = router;
