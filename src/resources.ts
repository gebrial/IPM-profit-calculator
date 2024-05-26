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

export const copperOreResource: Resource = {
    name: "Copper Ore",
    base_dependencies: [],
    base_sell_value: 1,
    type: ResourceType.ORE,
    base_craft_time: 0,
}

export const copperBarResource: Resource = {
    name: "Copper Bar",
    base_dependencies: [{ resource: copperOreResource, amount: 1000 }],
    base_sell_value: 1450,
    type: ResourceType.ALLOY,
    base_craft_time: 20,
}

export const copperWireResource: Resource = {
    name: "Copper Wire",
    base_dependencies: [{ resource: copperBarResource, amount: 5 }],
    base_sell_value: 10000,
    type: ResourceType.ITEM,
    base_craft_time: 60,
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

export const resources = [
    copperOreResource,
    copperBarResource,
    copperWireResource,
    batteryResource,
]