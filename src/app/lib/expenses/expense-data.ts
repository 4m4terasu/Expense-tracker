import type { Expense } from "../../../app/types/expense";

export const expenses: Expense[] = [
    {id : "1", label: "Groceries", amount: 50, category: "food", createdAt: new Date("2024-01-01"), note: "Weekly groceries"},
    {id : "2", label: "Electricity Bill", amount: 100, category: "bills", createdAt: new Date("2024-01-05")},
    {id : "3", label: "Movie Tickets", amount: 30, category: "entertainment", createdAt: new Date("2024-01-10"), note: "Weekend movie night"},
    {id : "4", label: "Netflix Subscription", amount: 15, category: "subscriptions", createdAt: new Date("2024-01-15")},
    {id : "5", label: "Clothing", amount: 80, category: "shopping", createdAt: new Date("2024-01-20"), note: "New jacket"}, 
    {id : "6", label: "Miscellaneous", amount: 20, category: "other", createdAt: new Date("2024-01-25"), note: "Random expenses"},
    {id : "7", label: "Dining Out", amount: 60, category: "food", createdAt: new Date("2024-01-30"), note: "Dinner with friends"},
    {id : "8", label: "Water Bill", amount: 40, category: "bills", createdAt: new Date("2024-02-01")},
    {id : "9", label: "Concert Tickets", amount: 120, category: "entertainment", createdAt: new Date("2024-02-05"), note: "Live concert"},
    {id : "10", label: "Gym Membership", amount: 25, category: "subscriptions", createdAt: new Date("2024-02-10")},
    {id : "11", label: "Electronics", amount: 200, category: "shopping", createdAt: new Date("2024-02-15"), note: "New headphones"},
    {id : "12", label: "Gift", amount: 50, category: "other", createdAt: new Date("2024-02-20"), note: "Birthday gift"}
]