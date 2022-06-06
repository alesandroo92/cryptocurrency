const criptoCoingecko = require("../Criptos/coingeckoServer");
const express = require("express");
const router = express.Router();

router.get("/coingecko/:id", criptoCoingecko);


module.exports = router;
