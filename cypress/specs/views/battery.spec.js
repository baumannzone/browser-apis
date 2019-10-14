import { battery, visitAndMock } from "../../support";

describe("Battery view", () => {
   let callbacks;

    beforeEach(() => {
        callbacks = {};
        visitAndMock("getBattery", ({
            level: 0.12,
            charging: false,
            chargingTime: 60,
            dischargingTime: 120,
            addEventListener: (name, fn) => callbacks[name] = fn
        }));
        battery();
    });

    it("should display battery information", () => {
        cy.get(".running-code li").first().should("contain", "12 %");
        cy.get(".running-code li").eq(1).should("contain", "No");
        cy.get(".running-code li").eq(2).should("contain", "1 min");
        cy.get(".running-code li").eq(3).should("contain", "2 min");        
    });

    // test "code" button here only once
    it("should provide code example", () => {
        cy
            .get("#demo1").should("not.be.visible")
            .get(".example-code button")
            .click()
            .get("#demo1").should("be.visible");
    });

    it("'chargingchange' event should be handled", () => {
        callbacks["chargingchange"]({
            currentTarget: {
                charging: true
            }            
        });
        cy.get(".running-code li").eq(1).should("contain", "Yes");
    });

    it("'levelchange' event should be handled", () => {
        callbacks["levelchange"]({
            currentTarget: {
                level: 0.5
            }            
        });
        cy.get(".running-code li").first().should("contain", "50 %");
    });
});