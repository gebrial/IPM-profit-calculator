export enum ResourceType {
    ORE = "ORE",
    ALLOY = "ALLOY",
    ITEM = "ITEM",
}

export type Resource = {
    name: string,
    base_dependencies: {
        resource: Resource,
        amount: number,
    }[],
    base_sell_value: number,
    type: ResourceType,
    base_craft_time: number,
}

// ORES

export const copperOreResource: Resource = {
    name: "Copper Ore",
    base_dependencies: [],
    base_sell_value: 1,
    type: ResourceType.ORE,
    base_craft_time: 0,
}

export const ironOreResource: Resource = {
    name: "Iron Ore",
    base_dependencies: [],
    base_sell_value: 2,
    type: ResourceType.ORE,
    base_craft_time: 0,
}

export const leadOreResource: Resource = {
    name: "Lead Bar",
    base_dependencies: [],
    base_sell_value: 4,
    type: ResourceType.ORE,
    base_craft_time: 0,
}


// ALLOYS

export const copperBarResource: Resource = {
    name: "Copper Bar",
    base_dependencies: [{ resource: copperOreResource, amount: 1000 }],
    base_sell_value: 1450,
    type: ResourceType.ALLOY,
    base_craft_time: 20,
}

export const ironBarResource: Resource = {
    name: "Iron Bar",
    base_dependencies: [{ resource: ironOreResource, amount: 1000 }],
    base_sell_value: 3000,
    type: ResourceType.ALLOY,
    base_craft_time: 30,
}

export const leadBarResource: Resource = {
    name: "Lead Bar",
    base_dependencies: [{ resource: leadOreResource, amount: 1000 }],
    base_sell_value: 6100,
    type: ResourceType.ALLOY,
    base_craft_time: 40,
}

// ITEMS

export const copperWireResource: Resource = {
    name: "Copper Wire",
    base_dependencies: [{ resource: copperBarResource, amount: 5 }],
    base_sell_value: 10000,
    type: ResourceType.ITEM,
    base_craft_time: 60,
}

export const ironNailResource: Resource = {
    name: "Iron Nail",
    base_dependencies: [{ resource: ironBarResource, amount: 5 }],
    base_sell_value: 20000,
    type: ResourceType.ITEM,
    base_craft_time: 120,
}

export const batteryResource: Resource = {
    name: "Battery",
    base_dependencies: [
        { resource: copperWireResource, amount: 2 },
        { resource: copperBarResource, amount: 10 },
    ],
    base_sell_value: 70000,
    type: ResourceType.ITEM,
    base_craft_time: 240,
}

export const hammerResource: Resource = {
    name: "Hammer",
    base_dependencies: [
        { resource: ironNailResource, amount: 2 },
        { resource: leadBarResource, amount: 5 },
    ],
    base_sell_value: 100000,
    type: ResourceType.ITEM,
    base_craft_time: 480,
}

export const resources = [
    copperOreResource,
    ironOreResource,
    leadOreResource,
    copperBarResource,
    ironBarResource,
    leadBarResource,
    copperWireResource,
    ironNailResource,
    batteryResource,
    hammerResource,
]
