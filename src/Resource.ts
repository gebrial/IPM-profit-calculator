export enum ResourceType {
    ORE = "ORE",
    ALLOY = "ALLOY",
    ITEM = "ITEM",
}

export type ResourceStruct = {
    name: string,
    base_dependencies: {
        resource: Resource,
        amount: number,
    }[],
    base_sell_value: number,
    type: ResourceType,
    base_craft_time: number,
}

export class Resource {
    public readonly name: string;
    public readonly base_dependencies: {
        resource: Resource,
        amount: number,
    }[];
    public readonly base_sell_value: number;
    public readonly type: ResourceType;
    public readonly base_craft_time: number;

    private reverse_dependency: Resource[] = []

    constructor(public resource: ResourceStruct) {
        this.name = resource.name
        this.base_dependencies = resource.base_dependencies
        this.base_sell_value = resource.base_sell_value
        this.type = resource.type
        this.base_craft_time = resource.base_craft_time
    }

    public addReverseDependency(resource: Resource) {
        this.reverse_dependency.push(resource)
    }
}