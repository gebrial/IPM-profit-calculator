"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.ResourceType = void 0;
var ResourceType;
(function (ResourceType) {
    ResourceType["ORE"] = "ORE";
    ResourceType["ALLOY"] = "ALLOY";
    ResourceType["ITEM"] = "ITEM";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
class Resource {
    constructor(resource) {
        this.resource = resource;
        this.reverse_dependency = [];
        this.name = resource.name;
        this.base_dependencies = resource.base_dependencies;
        this.base_sell_value = resource.base_sell_value;
        this.type = resource.type;
        this.base_craft_time = resource.base_craft_time;
    }
    addReverseDependency(resource) {
        this.reverse_dependency.push(resource);
    }
}
exports.Resource = Resource;
//# sourceMappingURL=Resource.js.map