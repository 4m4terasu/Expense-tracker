import type { Expense, ExpenseCategory } from "../../../app/types/expense";

export const calculateTotalExpenses = (expenses: Expense[]): number => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export const filterExpensesByCategory = (expenses: Expense[], category: ExpenseCategory): Expense[] => {
    return expenses.filter(expense => expense.category === category);
}

export const filterExpensesByDateRange = (expenses: Expense[], startDate: Date, endDate: Date): Expense[] => {
    return expenses.filter(expense => expense.createdAt >= startDate && expense.createdAt <= endDate);
}

export const groupExpensesByCategory = (expenses: Expense[]): Record<ExpenseCategory, Expense[]> => {
    return expenses.reduce((groups, expense) => {
        if (!groups[expense.category]) {
            groups[expense.category] = [];
        }
        groups[expense.category].push(expense);
        return groups;
    }, {} as Record<ExpenseCategory, Expense[]>);
}


export const sortExpensesByDate = (expenses: Expense[], ascending: boolean = true): Expense[] => {
    const clonedExpenses = expenses.slice();
    return clonedExpenses.sort((a, b) => {
        if (ascending) {    
            return a.createdAt.getTime() - b.createdAt.getTime();
        } else {
            return b.createdAt.getTime() - a.createdAt.getTime();
        }
    });
}

export const sortExpensesByAmount = (expenses: Expense[], ascending: boolean = true): Expense[] => {
    const clonedExpenses = expenses.slice();
    return clonedExpenses.sort((a, b) => {
        if (ascending) {
            return a.amount - b.amount;
        } else {
            return b.amount - a.amount;
        }
    });
} 
    