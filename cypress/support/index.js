import "./cypress-extensions";

export function battery() {
    return navigate("battery");
}

export function geolocation() {
    return navigate("geolocation");
}

function navigate(id) {
    return cy.get(`a[href$='${id}']`).click();
}

export function visitAndMockWithPromise(methodName, result) {
    return cy.visit("http://localhost:8080", {
        onBeforeLoad: win => {
            win.navigator[methodName] = () => Promise.resolve(result);
        }
    }).get("#nav");
}

export function visitAndMockWithCallback(methodName, result) {
    return cy.visit("http://localhost:8080", {
        onBeforeLoad: win => {
            win.navigator.geolocation[methodName] = cb => cb(result);
        }
    }).get("#nav");
}