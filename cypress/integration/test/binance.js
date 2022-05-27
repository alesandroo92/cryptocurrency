const getBinance = "http://localhost:4000/binance"

describe("BINANCE TESTING", () => {

    it("Get all cryptocurrency by Binance", () => {

        cy.request('GET', getBinance)
            .should((response) => {
                expect('Content-Type', /json/)
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
            });
    });

});