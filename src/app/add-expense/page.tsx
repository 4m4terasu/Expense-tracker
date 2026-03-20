/* Add Expense Page */

"use client";

import { useState } from "react";
import { Expense, ExpenseCategory } from "../types/expense";

export default function AddExpensePage() {
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState<ExpenseCategory | "">("");
const [date, setDate] = useState("");
const [note, setNote] = useState("");
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedAmount = amount.trim();
    const trimmedDate = date.trim();

    if (!trimmedTitle || !trimmedAmount || !category || !trimmedDate) {
        alert("Please fill in all required fields.");
        return;
    }

    if (isNaN(Number(trimmedAmount)) || Number(trimmedAmount) <= 0) {
        alert("Please enter a valid positive number for the amount.");
        return;
    }

    if (new Date(trimmedDate) > new Date()) {
        alert("Date cannot be in the future.");
        return;
    }

    const newExpense : Expense = {
        id: Date.now().toString(),
        title: trimmedTitle,
        amount: Number(trimmedAmount),
        category,
        createdAt: new Date(trimmedDate),
        note: note.trim() || undefined,
    };
    console.log("New Expense:", newExpense);
    alert("Expense added successfully!");
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setNote("");
};
    return (

        <div className="p-4 flex flex-col gap-6">
            <h1 className="text-3xl font-semibold tracking-tight">Add New Expense</h1>
            <p className="text-sm text-muted">Create a new expense record.</p>
            <div className="rounded-2xl bg-white border shadow-sm p-4">
            <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm font-medium tracking-tight">Title</label>
                    <input type="text" id="title" name="title" className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Grocery Shopping"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="amount" className="text-sm font-medium tracking-tight">Amount</label>
                    <input type="number" id="amount" step="0.01" name="amount" className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 45.67" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="category" className="text-sm font-medium tracking-tight">Category</label>
                    <select id="category" name="category" 
                    value={category} onChange={(e) => setCategory(e.target.value as ExpenseCategory | "")} className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select a category</option>
                        <option value="food">Food</option>
                        <option value="bills">Bills</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="shopping">Shopping</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="date" className="text-sm font-medium tracking-tight">Date</label>
                    <input type="date" max={new Date().toISOString().split("T")[0]} id="date" name="date"
                    value={date}  onChange={(e) => setDate(e.target.value)} className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="note" className="text-sm font-medium tracking-tight">Note</label>
                    <textarea id="note" name="note" rows={3} className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional notes about the expense"></textarea>
                </div>
                <button type="submit" className="mt-4 rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700">
                    Add Expense
                </button>
            </form>
            </div>
        </div>
    );
}
        