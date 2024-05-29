"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resources = exports.advancedBatteryResource = exports.laserTorchResource = exports.solarPanelResource = exports.basicComputerResource = exports.laserResource = exports.lensResource = exports.circuitResource = exports.glassResource = exports.hammerResource = exports.batteryResource = exports.ironNailResource = exports.copperWireResource = exports.steelBarResource = exports.bronzeBarResource = exports.goldBarResource = exports.silverBarResource = exports.aluminumBarResource = exports.silicaBarResource = exports.leadBarResource = exports.ironBarResource = exports.copperBarResource = exports.goldOreResource = exports.silverOreResource = exports.aluminumOreResource = exports.silicaOreResource = exports.leadOreResource = exports.copperOreResource = void 0;
const Resource_1 = require("./Resource");
const resourceList = [];
// ORES
exports.copperOreResource = new Resource_1.Resource({
    name: "Copper Ore",
    base_dependencies: [],
    base_sell_value: 1,
    type: Resource_1.ResourceType.ORE,
    base_craft_time: 0,
});
resourceList.push(exports.copperOreResource);
const ironOreResource = new Resource_1.Resource({
    name: "Iron Ore",
    base_dependencies: [],
    base_sell_value: 2,
    type: Resource_1.ResourceType.ORE,
    base_craft_time: 0,
});
resourceList.push(ironOreResource);
exports.leadOreResource = new Resource_1.Resource({
    name: "Lead Bar",
    base_dependencies: [],
    base_sell_value: 4,
    type: Resource_1.ResourceType.ORE,
    base_craft_time: 0,
});
resourceList.push(exports.leadOreResource);
exports.silicaOreResource = new Resource_1.Resource({
    name: "Silica Ore",
    base_dependencies: [],
    base_sell_value: 8,
    type: Resource_1.ResourceType.ORE,
    base_craft_time: 0,
});
resourceList.push(exports.silicaOreResource);
exports.aluminumOreResource = new Resource_1.Resource({
    name: "Aluminum Ore",
    base_dependencies: [],
    base_sell_value: 17,
    type: Resource_1.ResourceType.ORE,
    base_craft_time: 0,
});
resourceList.push(exports.aluminumOreResource);
exports.silverOreResource = new Resource_1.Resource({
    name: "Silver Ore",
    base_dependencies: [],
    base_sell_value: 36,
    type: Resource_1.ResourceType.ORE,
    base_craft_time: 0,
});
resourceList.push(exports.silverOreResource);
exports.goldOreResource = new Resource_1.Resource({
    name: "Gold Ore",
    base_dependencies: [],
    base_sell_value: 75,
    type: Resource_1.ResourceType.ORE,
    base_craft_time: 0,
});
resourceList.push(exports.goldOreResource);
// ALLOYS
exports.copperBarResource = new Resource_1.Resource({
    name: "Copper Bar",
    base_dependencies: [{ resource: exports.copperOreResource, amount: 1000 }],
    base_sell_value: 1450,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 20,
});
resourceList.push(exports.copperBarResource);
exports.ironBarResource = new Resource_1.Resource({
    name: "Iron Bar",
    base_dependencies: [{ resource: ironOreResource, amount: 1000 }],
    base_sell_value: 3000,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 30,
});
resourceList.push(exports.ironBarResource);
exports.leadBarResource = new Resource_1.Resource({
    name: "Lead Bar",
    base_dependencies: [{ resource: exports.leadOreResource, amount: 1000 }],
    base_sell_value: 6100,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 40,
});
resourceList.push(exports.leadBarResource);
exports.silicaBarResource = new Resource_1.Resource({
    name: "Silica Bar",
    base_dependencies: [{ resource: exports.silicaOreResource, amount: 1000 }],
    base_sell_value: 12500,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 60,
});
resourceList.push(exports.silicaBarResource);
exports.aluminumBarResource = new Resource_1.Resource({
    name: "Aluminum Bar",
    base_dependencies: [{ resource: exports.aluminumOreResource, amount: 1000 }],
    base_sell_value: 27600,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 80,
});
resourceList.push(exports.aluminumBarResource);
exports.silverBarResource = new Resource_1.Resource({
    name: "Silver Bar",
    base_dependencies: [{ resource: exports.silverOreResource, amount: 1000 }],
    base_sell_value: 60000,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 120,
});
resourceList.push(exports.silverBarResource);
exports.goldBarResource = new Resource_1.Resource({
    name: "Gold Bar",
    base_dependencies: [{ resource: exports.goldOreResource, amount: 1000 }],
    base_sell_value: 120000,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 180,
});
resourceList.push(exports.goldBarResource);
exports.bronzeBarResource = new Resource_1.Resource({
    name: "Bronze Bar",
    base_dependencies: [
        { resource: exports.copperBarResource, amount: 10 },
        { resource: exports.silverBarResource, amount: 2 },
    ],
    base_sell_value: 234000,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 240,
});
resourceList.push(exports.bronzeBarResource);
exports.steelBarResource = new Resource_1.Resource({
    name: "Steel Bar",
    base_dependencies: [
        { resource: exports.ironBarResource, amount: 30 },
        { resource: exports.leadBarResource, amount: 15 },
    ],
    base_sell_value: 340000,
    type: Resource_1.ResourceType.ALLOY,
    base_craft_time: 480,
});
resourceList.push(exports.steelBarResource);
// ITEMS
exports.copperWireResource = new Resource_1.Resource({
    name: "Copper Wire",
    base_dependencies: [{ resource: exports.copperBarResource, amount: 5 }],
    base_sell_value: 10000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 60,
});
resourceList.push(exports.copperWireResource);
exports.ironNailResource = new Resource_1.Resource({
    name: "Iron Nail",
    base_dependencies: [{ resource: exports.ironBarResource, amount: 5 }],
    base_sell_value: 20000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 120,
});
resourceList.push(exports.ironNailResource);
exports.batteryResource = new Resource_1.Resource({
    name: "Battery",
    base_dependencies: [
        { resource: exports.copperWireResource, amount: 2 },
        { resource: exports.copperBarResource, amount: 10 },
    ],
    base_sell_value: 70000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 240,
});
resourceList.push(exports.batteryResource);
exports.hammerResource = new Resource_1.Resource({
    name: "Hammer",
    base_dependencies: [
        { resource: exports.ironNailResource, amount: 2 },
        { resource: exports.leadBarResource, amount: 5 },
    ],
    base_sell_value: 100000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 480,
});
resourceList.push(exports.hammerResource);
exports.glassResource = new Resource_1.Resource({
    name: "Glass",
    base_dependencies: [
        { resource: exports.silicaBarResource, amount: 10 },
    ],
    base_sell_value: 220000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 720,
});
resourceList.push(exports.glassResource);
exports.circuitResource = new Resource_1.Resource({
    name: "Circuit",
    base_dependencies: [
        { resource: exports.silicaBarResource, amount: 5 },
        { resource: exports.aluminumBarResource, amount: 5 },
        { resource: exports.copperWireResource, amount: 10 },
    ],
    base_sell_value: 620000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 1200,
});
resourceList.push(exports.circuitResource);
exports.lensResource = new Resource_1.Resource({
    name: "Lens",
    base_dependencies: [
        { resource: exports.glassResource, amount: 1 },
        { resource: exports.silverBarResource, amount: 5 },
    ],
    base_sell_value: 1100000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 2400,
});
resourceList.push(exports.lensResource);
exports.laserResource = new Resource_1.Resource({
    name: "Laser",
    base_dependencies: [
        { resource: exports.lensResource, amount: 1 },
        { resource: exports.goldBarResource, amount: 5 },
        { resource: exports.ironBarResource, amount: 10 },
    ],
    base_sell_value: 3200000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 3600,
});
resourceList.push(exports.laserResource);
exports.basicComputerResource = new Resource_1.Resource({
    name: "Basic Computer",
    base_dependencies: [
        { resource: exports.circuitResource, amount: 5 },
        { resource: exports.silverBarResource, amount: 5 },
    ],
    base_sell_value: 7600000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 4800,
});
resourceList.push(exports.basicComputerResource);
exports.solarPanelResource = new Resource_1.Resource({
    name: "Solar Panel",
    base_dependencies: [
        { resource: exports.glassResource, amount: 10 },
        { resource: exports.circuitResource, amount: 5 },
    ],
    base_sell_value: 12500000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 6000,
});
resourceList.push(exports.solarPanelResource);
exports.laserTorchResource = new Resource_1.Resource({
    name: "Laser Torch",
    base_dependencies: [
        { resource: exports.laserResource, amount: 2 },
        { resource: exports.bronzeBarResource, amount: 5 },
        { resource: exports.lensResource, amount: 5 },
    ],
    base_sell_value: 31000000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 7200,
});
resourceList.push(exports.laserTorchResource);
exports.advancedBatteryResource = new Resource_1.Resource({
    name: "Advanced Battery",
    base_dependencies: [
        { resource: exports.batteryResource, amount: 30 },
        { resource: exports.steelBarResource, amount: 20 },
    ],
    base_sell_value: 35000000,
    type: Resource_1.ResourceType.ITEM,
    base_craft_time: 9000,
});
resourceList.push(exports.advancedBatteryResource);
exports.resources = resourceList;
//# sourceMappingURL=resources.js.map