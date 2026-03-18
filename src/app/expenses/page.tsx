import { expenses } from "../lib/expenses/expense-data";
import { ExpenseListItem } from "@/components/expenses/ExpenseListItem";
import Link from "next/link";
export default function ExpensesPage() {
    return (
        <div className="p-4 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold tracking-tight">All Expenses</h1>
                <Link href="/" className="text-sm text-blue-600 hover:underline">Back to Dashboard</Link>
            </div>
            <p className="text-sm text-slate-600">Review all your recorded expenses and manage your spending.</p> 
            <div className="rounded-2xl bg-white border shadow-sm p-4">
                {expenses.length === 0 ? (
                    <p className="text-sm text-slate-600">No expenses recorded yet.</p>
                ) : (
                    expenses.map((expense) => (
                        <ExpenseListItem key={expense.id} expense={expense} />
                    ))
                )}
            </div>
        </div>
    );
}