const criptoCoingecko = require("../Criptos/coingeckoServer");
const express = require("express");
const router = express.Router();

router.get("/coingecko", criptoCoingecko);


module.exports = router;
