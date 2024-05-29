import { resources } from "./resources";

export default function makeData() {
    const rows = resources.map((resource) => {
        return {
            name: resource.name,
            stars: 0,
            sellValue: resource.base_sell_value,
            craftCost: resource.craft_cost,
            itemProfit: resource.item_profit,
            profitPerHour: resource.profit_per_hour,
        }
    })

    return rows;
}
