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
export declare const copperBarResource: Resource;
export declare const copperWireResource: Resource;
export declare const batteryResource: Resource;
export declare const resources: Resource[];
