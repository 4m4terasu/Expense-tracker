/* Expenses Page */

"use client";

import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { expenses } from "../lib/expenses/expense-data";
import { ExpenseListItem } from "@/components/expenses/ExpenseListItem";
import Link from "next/link";
import { calculateTotalExpenses } from "../lib/expenses/expense-utils";
import { useState } from "react";
export default function ExpensesPage() {
const [expenseList, setExpenseList] = useState(expenses);
const totalExpenses = calculateTotalExpenses(expenseList);
const handleDelete = (id: string) => {
  const shouldDelete = window.confirm("Delete this expense?");

  if (!shouldDelete) {
    return;
  }

  setExpenseList((prev) => prev.filter((expense) => expense.id !== id));
};
const [editingExpenseId, setEditingExpenseId] = useState<string | null>(null);
const handleEdit = (id: string) => {
  setEditingExpenseId(id);
};
    return (
        <div className="p-4 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold tracking-tight">All Expenses</h1>
                <Link href="/" className="text-sm text-accent hover:underline">Back to Dashboard</Link>
            </div>
            <p className="text-sm text-muted">Review all your recorded expenses and manage your spending.</p> 
            <div className="justify-between grid gap-4 md:grid-cols-2">
                <SummaryCard label="Total Expenses" value={`${'$'}${totalExpenses.toFixed(2)}`} /> 
                <SummaryCard label="Total Records" value={`${expenseList.length}`} />
            </div>
            {editingExpenseId && (
            <p className="text-sm text-muted">
                Editing expense: {editingExpenseId}
            </p>
            )}
            <div className="rounded-2xl bg-white border shadow-sm p-4">
                {expenseList.length === 0 ? (
                    <p className="text-sm text-muted">No expenses recorded yet.</p>
                ) : (
                    expenseList.map((expense) => (
                        <ExpenseListItem key={expense.id} expense={expense} onDelete={handleDelete} onEdit={handleEdit} />
                    ))
                )}
            </div>
        </div>
    );
}