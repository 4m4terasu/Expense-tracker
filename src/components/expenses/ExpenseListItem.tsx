import type { Expense } from "@/app/types/expense";

export const ExpenseListItem = ({ expense }: { expense: Expense }) => {
    return (
        <div className="flex justify-between py-2 border-b last:border-b-0">
            <div>
                <p className="text-sm font-medium tracking-tight">{expense.label}</p>   
                <p className="text-xs text-slate-600">{expense.category}</p>
            </div>
            <div className="flex flex-col text-right">
                <p className="text-sm font-semibold tracking-tight">${expense.amount.toFixed(2)}</p>
                <p className="text-xs text-slate-600">{expense.createdAt.toLocaleDateString()}</p>
            </div>
        </div>
    );
}   