import { geolocation, visitAndMockWithCallback } from "../../support"

describe("Geolocation view", () => {
    beforeEach(() => {
        visitAndMockWithCallback("getCurrentPosition", ({
            coords: {
                latitude: 45.6769872,
                longitude: 11.1603681
            }
        }));
        geolocation();
    });

    it("should display coordinates", () => {
        cy.get(".running-code button").first().click()
            .get(".badge").first().should("contain", "45.6769872")
            .get(".badge").eq(1).should("contain", "11.1603681")
    });
})