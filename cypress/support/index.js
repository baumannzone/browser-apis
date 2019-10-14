import "./cypress-extensions";

export function battery() {
    return cy.get("a[href$='battery']").click();
}

export function visitAndMock(methodName, result) {
    return cy.visit("http://localhost:8080", {
        onBeforeLoad: win => {
            win.navigator[methodName] = () => Promise.resolve(result);
        }
    }).get("#nav");
}