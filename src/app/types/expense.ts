type ExpenseCategory = {
    food : string;
    bills : string;
    entartaiment : string;
    subscriptions : string;
    shopping : string;
    other : string;
}

type Expense = {
    id : string;
    title : string;
    amount : number;
    category: ExpenseCategory;
    createdAt: Date;
    note? : string;
}