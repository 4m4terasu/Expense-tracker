export type ExpenseCategory = "food" | "bills" | "entertainment" | "subscriptions" | "shopping" | "other";

export type Expense = {
    id : string;
    title : string;
    amount : number;
    category: ExpenseCategory;
    createdAt: Date;
    note? : string;
}

type NewExpenseInput = {
    label : string;
    amount : number;
    category: ExpenseCategory;
    note? : string;
}