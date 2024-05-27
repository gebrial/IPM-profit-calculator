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

const resourceList = []

// ORES

export const copperOreResource: Resource = {
    name: "Copper Ore",
    base_dependencies: [],
    base_sell_value: 1,
    type: ResourceType.ORE,
    base_craft_time: 0,
}
resourceList.push(copperOreResource)

export const ironOreResource: Resource = {
    name: "Iron Ore",
    base_dependencies: [],
    base_sell_value: 2,
    type: ResourceType.ORE,
    base_craft_time: 0,
}
resourceList.push(ironOreResource)

export const leadOreResource: Resource = {
    name: "Lead Bar",
    base_dependencies: [],
    base_sell_value: 4,
    type: ResourceType.ORE,
    base_craft_time: 0,
}
resourceList.push(leadOreResource)

export const silicaOreResource: Resource = {
    name: "Silica Ore",
    base_dependencies: [],
    base_sell_value: 8,
    type: ResourceType.ORE,
    base_craft_time: 0,
}
resourceList.push(silicaOreResource)

export const aluminumOreResource: Resource = {
    name: "Aluminum Ore",
    base_dependencies: [],
    base_sell_value: 17,
    type: ResourceType.ORE,
    base_craft_time: 0,
}
resourceList.push(aluminumOreResource)

export const silverOreResource: Resource = {
    name: "Silver Ore",
    base_dependencies: [],
    base_sell_value: 36,
    type: ResourceType.ORE,
    base_craft_time: 0,
}
resourceList.push(silverOreResource)

export const goldOreResource: Resource = {
    name: "Gold Ore",
    base_dependencies: [],
    base_sell_value: 75,
    type: ResourceType.ORE,
    base_craft_time: 0,
}
resourceList.push(goldOreResource)

// ALLOYS

export const copperBarResource: Resource = {
    name: "Copper Bar",
    base_dependencies: [{ resource: copperOreResource, amount: 1000 }],
    base_sell_value: 1450,
    type: ResourceType.ALLOY,
    base_craft_time: 20,
}
resourceList.push(copperBarResource)

export const ironBarResource: Resource = {
    name: "Iron Bar",
    base_dependencies: [{ resource: ironOreResource, amount: 1000 }],
    base_sell_value: 3000,
    type: ResourceType.ALLOY,
    base_craft_time: 30,
}
resourceList.push(ironBarResource)

export const leadBarResource: Resource = {
    name: "Lead Bar",
    base_dependencies: [{ resource: leadOreResource, amount: 1000 }],
    base_sell_value: 6100,
    type: ResourceType.ALLOY,
    base_craft_time: 40,
}
resourceList.push(leadBarResource)

export const silicaBarResource: Resource = {
    name: "Silica Bar",
    base_dependencies: [{ resource: silicaOreResource, amount: 1000 }],
    base_sell_value: 12500,
    type: ResourceType.ALLOY,
    base_craft_time: 60,
}
resourceList.push(silicaBarResource)

export const aluminumBarResource: Resource = {
    name: "Aluminum Bar",
    base_dependencies: [{ resource: aluminumOreResource, amount: 1000 }],
    base_sell_value: 27600,
    type: ResourceType.ALLOY,
    base_craft_time: 80,
}
resourceList.push(aluminumBarResource)

export const silverBarResource: Resource = {
    name: "Silver Bar",
    base_dependencies: [{ resource: silverOreResource, amount: 1000 }],
    base_sell_value: 60000,
    type: ResourceType.ALLOY,
    base_craft_time: 120,
}
resourceList.push(silverBarResource)

export const goldBarResource: Resource = {
    name: "Gold Bar",
    base_dependencies: [{ resource: goldOreResource, amount: 1000 }],
    base_sell_value: 120000,
    type: ResourceType.ALLOY,
    base_craft_time: 180,
}
resourceList.push(goldBarResource)

export const bronzeBarResource: Resource = {
    name: "Bronze Bar",
    base_dependencies: [
        { resource: copperBarResource, amount: 10 },
        { resource: silverBarResource, amount: 2 },
    ],
    base_sell_value: 234000,
    type: ResourceType.ALLOY,
    base_craft_time: 240,
}
resourceList.push(bronzeBarResource)

export const steelBarResource: Resource = {
    name: "Steel Bar",
    base_dependencies: [
        { resource: ironBarResource, amount: 30 },
        { resource: leadBarResource, amount: 15 },
    ],
    base_sell_value: 340000,
    type: ResourceType.ALLOY,
    base_craft_time: 480,
}
resourceList.push(steelBarResource)

// ITEMS

export const copperWireResource: Resource = {
    name: "Copper Wire",
    base_dependencies: [{ resource: copperBarResource, amount: 5 }],
    base_sell_value: 10000,
    type: ResourceType.ITEM,
    base_craft_time: 60,
}
resourceList.push(copperWireResource)

export const ironNailResource: Resource = {
    name: "Iron Nail",
    base_dependencies: [{ resource: ironBarResource, amount: 5 }],
    base_sell_value: 20000,
    type: ResourceType.ITEM,
    base_craft_time: 120,
}
resourceList.push(ironNailResource)

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
resourceList.push(batteryResource)

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
resourceList.push(hammerResource)

export const glassResource: Resource = {
    name: "Glass",
    base_dependencies: [
        { resource: silicaBarResource, amount: 10 },
    ],
    base_sell_value: 220000,
    type: ResourceType.ITEM,
    base_craft_time: 720,
}
resourceList.push(glassResource)

export const circuitResource: Resource = {
    name: "Circuit",
    base_dependencies: [
        { resource: silicaBarResource, amount: 5 },
        { resource: aluminumBarResource, amount: 5 },
        { resource: copperWireResource, amount: 10 },
    ],
    base_sell_value: 620000,
    type: ResourceType.ITEM,
    base_craft_time: 1200,
}
resourceList.push(circuitResource)

export const lensResource: Resource = {
    name: "Lens",
    base_dependencies: [
        { resource: glassResource, amount: 1 },
        { resource: silverBarResource, amount: 5 },
    ],
    base_sell_value: 1100000,
    type: ResourceType.ITEM,
    base_craft_time: 2400,
}
resourceList.push(lensResource)

export const laserResource: Resource = {
    name: "Laser",
    base_dependencies: [
        { resource: lensResource, amount: 1 },
        { resource: goldBarResource, amount: 5 },
        { resource: ironBarResource, amount: 10 },
    ],
    base_sell_value: 3200000,
    type: ResourceType.ITEM,
    base_craft_time: 3600,
}
resourceList.push(laserResource)

export const basicComputerResource: Resource = {
    name: "Basic Computer",
    base_dependencies: [
        { resource: circuitResource, amount: 5 },
        { resource: silverBarResource, amount: 5 },
    ],
    base_sell_value: 7600000,
    type: ResourceType.ITEM,
    base_craft_time: 4800,
}
resourceList.push(basicComputerResource)

export const solarPanelResource: Resource = {
    name: "Solar Panel",
    base_dependencies: [
        { resource: glassResource, amount: 10 },
        { resource: circuitResource, amount: 5 },
    ],
    base_sell_value: 12500000,
    type: ResourceType.ITEM,
    base_craft_time: 6000,
}
resourceList.push(solarPanelResource)

export const laserTorchResource: Resource = {
    name: "Laser Torch",
    base_dependencies: [
        { resource: laserResource, amount: 2 },
        { resource: bronzeBarResource, amount: 5 },
        { resource: lensResource, amount: 5 },
    ],
    base_sell_value: 31000000,
    type: ResourceType.ITEM,
    base_craft_time: 7200,
}
resourceList.push(laserTorchResource)

export const advancedBatteryResource: Resource = {
    name: "Advanced Battery",
    base_dependencies: [
        { resource: batteryResource, amount: 30 },
        { resource: steelBarResource, amount: 20 },
    ],
    base_sell_value: 35000000,
    type: ResourceType.ITEM,
    base_craft_time: 9000,
}
resourceList.push(advancedBatteryResource)


export const resources = resourceList
