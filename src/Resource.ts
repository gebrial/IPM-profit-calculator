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
    public stars: number = 0
    public craft_cost: number = 0
    public item_profit: number = 0
    public profit_per_hour: number = 0

    constructor(public resource: ResourceStruct) {
        this.name = resource.name
        this.base_dependencies = resource.base_dependencies
        this.base_sell_value = resource.base_sell_value
        this.type = resource.type
        this.base_craft_time = resource.base_craft_time

        this.craft_cost = this.calculateCraftCost()
        this.item_profit = this.getValueWithStars() - this.craft_cost
        this.profit_per_hour = this.item_profit * 3600 / this.base_craft_time
    }

    public addReverseDependency(resource: Resource) {
        this.reverse_dependency.push(resource)
    }

    public getValueWithStars() {
        return this.base_sell_value * (1 + this.stars * 0.2)
    }

    /**
     * Calculate the cost of the inputs to craft this resource.
     * Takes into account the stars of the dependencies when calculating their value.
     * @returns the cost of the inputs of crafting this resource
     */
    private calculateCraftCost() {
        return this.base_dependencies.reduce((acc, dep) => {
            return acc + dep.resource.getValueWithStars() * dep.amount
        }, 0)
    }
}