const getCoingecko = "http://localhost:4000/coingecko"

describe("COINGECKO TESTING", () => {

    it("Get all cryptocurrency by Coingecko", () => {

        cy.request('GET', getCoingecko)
            .should((response) => {
                expect('Content-Type', /json/)
                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(response.body)
            });
    });

});