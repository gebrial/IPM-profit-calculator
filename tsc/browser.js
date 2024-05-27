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
    headerRow.insertCell().textContent = 'Stars';
    headerRow.insertCell().textContent = 'Sell Value';
    headerRow.insertCell().textContent = 'Craft Cost';
    headerRow.insertCell().textContent = 'Profit Per Item';
    headerRow.insertCell().textContent = 'Profit Per Hour';
    // make body
    const body = table.createTBody();
    resources.resources.forEach(resource => {
        const row = body.insertRow();
        row.insertCell().textContent = resource.name;
        // add number input for stars
        const starsInput = document.createElement('input');
        starsInput.type = 'number';
        starsInput.value = '0';
        row.insertCell().appendChild(starsInput);
        const sellValueCell = row.insertCell();
        const craftCostCell = row.insertCell();
        const profitCell = row.insertCell();
        const profitPerHourCell = row.insertCell();
        // add on change event listener for stars input
        starsInput.addEventListener('change', () => {
            // recalculate all values in row and upstream dependencies
            const stars = parseInt(starsInput.value);
            const baseSellValue = resource.base_sell_value;
            // rounding to avoid floating point errors
            const sellValue = Math.round(baseSellValue * (1 + 0.2 * stars));
            sellValueCell.textContent = sellValue.toString();
            // calculate craft cost
            let craft_cost = 0;
            resource.base_dependencies.forEach(dependency => {
                // calculates direct cost only
                craft_cost += dependency.resource.base_sell_value * dependency.amount;
            });
            craftCostCell.textContent = craft_cost.toString();
            // calculate profit per item
            const profit = sellValue - craft_cost;
            profitCell.textContent = profit.toString();
            // calculate profit per hour
            const profit_per_hour = 3600 * profit / resource.base_craft_time;
            profitPerHourCell.textContent = profit_per_hour.toString();
        });
        starsInput.dispatchEvent(new Event('change'));
    });
}
//# sourceMappingURL=browser.js.map