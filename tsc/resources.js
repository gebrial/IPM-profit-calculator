"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resources = exports.batteryResource = exports.copperWireResource = exports.copperBarResource = exports.copperOreResource = exports.ResourceType = void 0;
var ResourceType;
(function (ResourceType) {
    ResourceType["ORE"] = "ORE";
    ResourceType["ALLOY"] = "ALLOY";
    ResourceType["ITEM"] = "ITEM";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
exports.copperOreResource = {
    name: "Copper Ore",
    base_dependencies: [],
    base_sell_value: 1,
    type: ResourceType.ORE,
    base_craft_time: 0,
};
exports.copperBarResource = {
    name: "Copper Bar",
    base_dependencies: [{ resource: exports.copperOreResource, amount: 1000 }],
    base_sell_value: 1450,
    type: ResourceType.ALLOY,
    base_craft_time: 20,
};
exports.copperWireResource = {
    name: "Copper Wire",
    base_dependencies: [{ resource: exports.copperBarResource, amount: 5 }],
    base_sell_value: 10000,
    type: ResourceType.ITEM,
    base_craft_time: 60,
};
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
exports.resources = [
    exports.copperOreResource,
    exports.copperBarResource,
    exports.copperWireResource,
    exports.batteryResource,
];
//# sourceMappingURL=resources.js.map