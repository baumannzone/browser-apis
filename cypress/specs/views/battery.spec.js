import { battery, visitAndMock } from "../../support";

describe("Battery view", () => {
    it("should display battery information", () => {
        visitAndMock("getBattery", {
            level: 0.12,
            charging: false,
            chargingTime: 60,
            dischargingTime: 120
        });
        battery();

        cy.get(".running-code li").first().should("contain", "12 %");
        cy.get(".running-code li").eq(1).should("contain", "No");
        cy.get(".running-code li").eq(2).should("contain", "1 min");
        cy.get(".running-code li").eq(3).should("contain", "2 min");        
    });
});