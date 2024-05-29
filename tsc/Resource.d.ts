export declare enum ResourceType {
    ORE = "ORE",
    ALLOY = "ALLOY",
    ITEM = "ITEM"
}
export declare type ResourceStruct = {
    name: string;
    base_dependencies: {
        resource: Resource;
        amount: number;
    }[];
    base_sell_value: number;
    type: ResourceType;
    base_craft_time: number;
};
export declare class Resource {
    resource: ResourceStruct;
    readonly name: string;
    readonly base_dependencies: {
        resource: Resource;
        amount: number;
    }[];
    readonly base_sell_value: number;
    readonly type: ResourceType;
    readonly base_craft_time: number;
    private reverse_dependency;
    constructor(resource: ResourceStruct);
    addReverseDependency(resource: Resource): void;
}
