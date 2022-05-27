const getCoinmarket = "http://localhost:4000/coinmarket"

describe("COINMARKET TESTING", () => {

    it("Get all cryptocurrency by Coinmarket", () => {

        cy.request('GET', getCoinmarket)
            .should((response) => {
                expect('Content-Type', /json/)
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
            });
    });

});