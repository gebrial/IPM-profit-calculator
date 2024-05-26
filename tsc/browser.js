"use strict";
/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const resources = tslib_1.__importStar(require("./resources"));
// wait until body is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    makeTable();
});
function makeTable() {
    // make table in body
    const table = document.createElement('table');
    document.body.appendChild(table);
    // make header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    headerRow.insertCell().textContent = 'Name';
    headerRow.insertCell().textContent = 'Sell Value';
    headerRow.insertCell().textContent = 'Craft Cost';
    headerRow.insertCell().textContent = 'Profit';
    // make body
    const body = table.createTBody();
    resources.resources.forEach(resource => {
        const row = body.insertRow();
        row.insertCell().textContent = resource.name;
        row.insertCell().textContent = resource.base_sell_value.toString();
        let craft_cost = 0;
        resource.base_dependencies.forEach(dependency => {
            // calculates direct cost only
            craft_cost += dependency.resource.base_sell_value * dependency.amount;
        });
        row.insertCell().textContent = craft_cost.toString();
        row.insertCell().textContent = (resource.base_sell_value - craft_cost).toString();
    });
}
//# sourceMappingURL=browser.js.map