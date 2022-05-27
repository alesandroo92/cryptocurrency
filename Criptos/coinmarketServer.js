const axios = require("axios");
const cheerio = require("cheerio");


const getPrice = async (req, res) => {
    try {
        const siteUrl = "https://coinmarketcap.com/"

        const { data } = await axios({
            method: "GET",
            url: siteUrl,
        })

        const result = cheerio.load(data)
        const elemSelector = "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr"

        const keys = [
            "rank",
            "name",
            "price",
            "24h",
            "7d",
            "marketCap",
            "volume",
            "circulatingSupply"
        ];

        const coinArr = [];

        result(elemSelector).each((parentIdx, parentElem) => {
            let keyIdx = 0;
            const coinObj = {};

            if(parentIdx <= 9) {
                result(parentElem).children().each((childIdx, childElement) => {
                let tdValue = result(childElement).text()

                if(keyIdx === 1 || keyIdx === 6) {
                    tdValue = result("p:first-child", result(childElement).html()).text()
                }

                if(tdValue) {
                    coinObj[keys[keyIdx]] = tdValue

                    keyIdx++
                }
                })

                coinArr.push(coinObj)
            }
        })

        //console.log(coinArr)
        res.status(200).send(coinArr)

    } catch (error) {
        res.status(500).send("Ha sucedido el siguiente error: "+error)
    }
}


module.exports = getPrice;
