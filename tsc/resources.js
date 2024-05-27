"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resources = exports.advancedBatteryResource = exports.laserTorchResource = exports.solarPanelResource = exports.basicComputerResource = exports.laserResource = exports.lensResource = exports.circuitResource = exports.glassResource = exports.hammerResource = exports.batteryResource = exports.ironNailResource = exports.copperWireResource = exports.steelBarResource = exports.bronzeBarResource = exports.goldBarResource = exports.silverBarResource = exports.aluminumBarResource = exports.silicaBarResource = exports.leadBarResource = exports.ironBarResource = exports.copperBarResource = exports.goldOreResource = exports.silverOreResource = exports.aluminumOreResource = exports.silicaOreResource = exports.leadOreResource = exports.ironOreResource = exports.copperOreResource = exports.ResourceType = void 0;
var ResourceType;
(function (ResourceType) {
    ResourceType["ORE"] = "ORE";
    ResourceType["ALLOY"] = "ALLOY";
    ResourceType["ITEM"] = "ITEM";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
const resourceList = [];
// ORES
exports.copperOreResource = {
    name: "Copper Ore",
    base_dependencies: [],
    base_sell_value: 1,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
resourceList.push(exports.copperOreResource);
exports.ironOreResource = {
    name: "Iron Ore",
    base_dependencies: [],
    base_sell_value: 2,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
resourceList.push(exports.ironOreResource);
exports.leadOreResource = {
    name: "Lead Bar",
    base_dependencies: [],
    base_sell_value: 4,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
resourceList.push(exports.leadOreResource);
exports.silicaOreResource = {
    name: "Silica Ore",
    base_dependencies: [],
    base_sell_value: 8,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
resourceList.push(exports.silicaOreResource);
exports.aluminumOreResource = {
    name: "Aluminum Ore",
    base_dependencies: [],
    base_sell_value: 17,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
resourceList.push(exports.aluminumOreResource);
exports.silverOreResource = {
    name: "Silver Ore",
    base_dependencies: [],
    base_sell_value: 36,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
resourceList.push(exports.silverOreResource);
exports.goldOreResource = {
    name: "Gold Ore",
    base_dependencies: [],
    base_sell_value: 75,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
resourceList.push(exports.goldOreResource);
// ALLOYS
exports.copperBarResource = {
    name: "Copper Bar",
    base_dependencies: [{ resource: exports.copperOreResource, amount: 1000 }],
    base_sell_value: 1450,
    type: ResourceType.ALLOY,
    base_craft_time: 20,
};
resourceList.push(exports.copperBarResource);
exports.ironBarResource = {
    name: "Iron Bar",
    base_dependencies: [{ resource: exports.ironOreResource, amount: 1000 }],
    base_sell_value: 3000,
    type: ResourceType.ALLOY,
    base_craft_time: 30,
};
resourceList.push(exports.ironBarResource);
exports.leadBarResource = {
    name: "Lead Bar",
    base_dependencies: [{ resource: exports.leadOreResource, amount: 1000 }],
    base_sell_value: 6100,
    type: ResourceType.ALLOY,
    base_craft_time: 40,
};
resourceList.push(exports.leadBarResource);
exports.silicaBarResource = {
    name: "Silica Bar",
    base_dependencies: [{ resource: exports.silicaOreResource, amount: 1000 }],
    base_sell_value: 12500,
    type: ResourceType.ALLOY,
    base_craft_time: 60,
};
resourceList.push(exports.silicaBarResource);
exports.aluminumBarResource = {
    name: "Aluminum Bar",
    base_dependencies: [{ resource: exports.aluminumOreResource, amount: 1000 }],
    base_sell_value: 27600,
    type: ResourceType.ALLOY,
    base_craft_time: 80,
};
resourceList.push(exports.aluminumBarResource);
exports.silverBarResource = {
    name: "Silver Bar",
    base_dependencies: [{ resource: exports.silverOreResource, amount: 1000 }],
    base_sell_value: 60000,
    type: ResourceType.ALLOY,
    base_craft_time: 120,
};
resourceList.push(exports.silverBarResource);
exports.goldBarResource = {
    name: "Gold Bar",
    base_dependencies: [{ resource: exports.goldOreResource, amount: 1000 }],
    base_sell_value: 120000,
    type: ResourceType.ALLOY,
    base_craft_time: 180,
};
resourceList.push(exports.goldBarResource);
exports.bronzeBarResource = {
    name: "Bronze Bar",
    base_dependencies: [
        { resource: exports.copperBarResource, amount: 10 },
        { resource: exports.silverBarResource, amount: 2 },
    ],
    base_sell_value: 234000,
    type: ResourceType.ALLOY,
    base_craft_time: 240,
};
resourceList.push(exports.bronzeBarResource);
exports.steelBarResource = {
    name: "Steel Bar",
    base_dependencies: [
        { resource: exports.ironBarResource, amount: 30 },
        { resource: exports.leadBarResource, amount: 15 },
    ],
    base_sell_value: 340000,
    type: ResourceType.ALLOY,
    base_craft_time: 480,
};
resourceList.push(exports.steelBarResource);
// ITEMS
exports.copperWireResource = {
    name: "Copper Wire",
    base_dependencies: [{ resource: exports.copperBarResource, amount: 5 }],
    base_sell_value: 10000,
    type: ResourceType.ITEM,
    base_craft_time: 60,
};
resourceList.push(exports.copperWireResource);
exports.ironNailResource = {
    name: "Iron Nail",
    base_dependencies: [{ resource: exports.ironBarResource, amount: 5 }],
    base_sell_value: 20000,
    type: ResourceType.ITEM,
    base_craft_time: 120,
};
resourceList.push(exports.ironNailResource);
exports.batteryResource = {
    name: "Battery",
    base_dependencies: [
        { resource: exports.copperWireResource, amount: 2 },
        { resource: exports.copperBarResource, amount: 10 },
    ],
    base_sell_value: 70000,
    type: ResourceType.ITEM,
    base_craft_time: 240,
};
resourceList.push(exports.batteryResource);
exports.hammerResource = {
    name: "Hammer",
    base_dependencies: [
        { resource: exports.ironNailResource, amount: 2 },
        { resource: exports.leadBarResource, amount: 5 },
    ],
    base_sell_value: 100000,
    type: ResourceType.ITEM,
    base_craft_time: 480,
};
resourceList.push(exports.hammerResource);
exports.glassResource = {
    name: "Glass",
    base_dependencies: [
        { resource: exports.silicaBarResource, amount: 10 },
    ],
    base_sell_value: 220000,
    type: ResourceType.ITEM,
    base_craft_time: 720,
};
resourceList.push(exports.glassResource);
exports.circuitResource = {
    name: "Circuit",
    base_dependencies: [
        { resource: exports.silicaBarResource, amount: 5 },
        { resource: exports.aluminumBarResource, amount: 5 },
        { resource: exports.copperWireResource, amount: 10 },
    ],
    base_sell_value: 620000,
    type: ResourceType.ITEM,
    base_craft_time: 1200,
};
resourceList.push(exports.circuitResource);
exports.lensResource = {
    name: "Lens",
    base_dependencies: [
        { resource: exports.glassResource, amount: 1 },
        { resource: exports.silverBarResource, amount: 5 },
    ],
    base_sell_value: 1100000,
    type: ResourceType.ITEM,
    base_craft_time: 2400,
};
resourceList.push(exports.lensResource);
exports.laserResource = {
    name: "Laser",
    base_dependencies: [
        { resource: exports.lensResource, amount: 1 },
        { resource: exports.goldBarResource, amount: 5 },
        { resource: exports.ironBarResource, amount: 10 },
    ],
    base_sell_value: 3200000,
    type: ResourceType.ITEM,
    base_craft_time: 3600,
};
resourceList.push(exports.laserResource);
exports.basicComputerResource = {
    name: "Basic Computer",
    base_dependencies: [
        { resource: exports.circuitResource, amount: 5 },
        { resource: exports.silverBarResource, amount: 5 },
    ],
    base_sell_value: 7600000,
    type: ResourceType.ITEM,
    base_craft_time: 4800,
};
resourceList.push(exports.basicComputerResource);
exports.solarPanelResource = {
    name: "Solar Panel",
    base_dependencies: [
        { resource: exports.glassResource, amount: 10 },
        { resource: exports.circuitResource, amount: 5 },
    ],
    base_sell_value: 12500000,
    type: ResourceType.ITEM,
    base_craft_time: 6000,
};
resourceList.push(exports.solarPanelResource);
exports.laserTorchResource = {
    name: "Laser Torch",
    base_dependencies: [
        { resource: exports.laserResource, amount: 2 },
        { resource: exports.bronzeBarResource, amount: 5 },
        { resource: exports.lensResource, amount: 5 },
    ],
    base_sell_value: 31000000,
    type: ResourceType.ITEM,
    base_craft_time: 7200,
};
resourceList.push(exports.laserTorchResource);
exports.advancedBatteryResource = {
    name: "Advanced Battery",
    base_dependencies: [
        { resource: exports.batteryResource, amount: 30 },
        { resource: exports.steelBarResource, amount: 20 },
    ],
    base_sell_value: 35000000,
    type: ResourceType.ITEM,
    base_craft_time: 9000,
};
resourceList.push(exports.advancedBatteryResource);
exports.resources = resourceList;
//# sourceMappingURL=resources.js.map