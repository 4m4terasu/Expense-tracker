import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { ExpenseListItem } from "@/components/expenses/ExpenseListItem";
import Link from "next/link";
import { calculateTotalExpenses } from "../lib/expenses/expense-utils";
import { getExpenses } from "../lib/expenses/queries";

export default async function ExpensesPage() {
const expenseList = await getExpenses();
const totalExpenses = calculateTotalExpenses(expenseList);

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">All Expenses</h1>
        <Link href="/" className="text-sm text-accent hover:underline">
          Back to Dashboard
        </Link>
      </div>

      <p className="text-sm text-muted">
        Review all your recorded expenses and manage your spending.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard
          label="Total Expenses"
          value={`$${totalExpenses.toFixed(2)}`}
        />
        <SummaryCard label="Total Records" value={`${expenseList.length}`} />
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        {expenseList.length === 0 ? (
          <p className="text-sm text-muted">No expenses recorded yet.</p>
        ) : (
          expenseList.map((expense) => (
            <ExpenseListItem key={expense.id} expense={expense} showActions />
          ))
        )}
      </div>
    </div>
  );
}