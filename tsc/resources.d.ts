export declare enum ResourceType {
    ORE = "ORE",
    ALLOY = "ALLOY",
    ITEM = "ITEM"
}
export declare type Resource = {
    name: string;
    base_dependencies: {
        resource: Resource;
        amount: number;
    }[];
    base_sell_value: number;
    type: ResourceType;
    base_craft_time: number;
};
export declare const copperOreResource: Resource;
export declare const ironOreResource: Resource;
export declare const leadOreResource: Resource;
export declare const silicaOreResource: Resource;
export declare const aluminumOreResource: Resource;
export declare const silverOreResource: Resource;
export declare const goldOreResource: Resource;
export declare const copperBarResource: Resource;
export declare const ironBarResource: Resource;
export declare const leadBarResource: Resource;
export declare const silicaBarResource: Resource;
export declare const aluminumBarResource: Resource;
export declare const silverBarResource: Resource;
export declare const goldBarResource: Resource;
export declare const bronzeBarResource: Resource;
export declare const steelBarResource: Resource;
export declare const copperWireResource: Resource;
export declare const ironNailResource: Resource;
export declare const batteryResource: Resource;
export declare const hammerResource: Resource;
export declare const glassResource: Resource;
export declare const circuitResource: Resource;
export declare const lensResource: Resource;
export declare const laserResource: Resource;
export declare const basicComputerResource: Resource;
export declare const solarPanelResource: Resource;
export declare const laserTorchResource: Resource;
export declare const advancedBatteryResource: Resource;
export declare const resources: Resource[];
