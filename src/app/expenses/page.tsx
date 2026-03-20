/* Expenses Page */

import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { expenses } from "../lib/expenses/expense-data";
import { ExpenseListItem } from "@/components/expenses/ExpenseListItem";
import Link from "next/link";
import { calculateTotalExpenses } from "../lib/expenses/expense-utils";
export default function ExpensesPage() {
const totalExpenses = calculateTotalExpenses(expenses);
    return (
        <div className="p-4 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold tracking-tight">All Expenses</h1>
                <Link href="/" className="text-sm text-blue-600 hover:underline">Back to Dashboard</Link>
            </div>
            <p className="text-sm text-slate-600">Review all your recorded expenses and manage your spending.</p> 
            <div className="justify-between grid gap-4 md:grid-cols-2">
                <SummaryCard label="Total Expenses" value={`${'$'}${totalExpenses.toFixed(2)}`} /> 
                <SummaryCard label="Total Records" value={`${expenses.length}`} />
            </div>
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