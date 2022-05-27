const criptoCoinmarket = require("../Criptos/coinmarketServer");
const express = require("express");
const router = express.Router();

router.get("/coinmarket", criptoCoinmarket);


module.exports = router;
