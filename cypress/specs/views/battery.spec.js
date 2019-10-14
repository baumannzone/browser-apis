import { battery, visitAndMock } from "../../support";

describe("Battery view", () => {
    beforeEach(() => {
        visitAndMock("getBattery", {
            level: 0.12,
            charging: false,
            chargingTime: 100,
            dischargingTime: 1000
        });
        battery();
    });

    it("should display battery information", () => {
        cy.get(".running-code li").first().should("contain", "12 %");
    })
});