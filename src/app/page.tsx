import {calculateTotalExpenses, getCategoryTotals, getMostExpensiveExpense, getLeastExpensiveExpense} from "./lib/expenses/expense-utils";
import { getExpenses } from "./lib/expenses/queries";
import { ExpenseListItem } from "../components/expenses/ExpenseListItem";
import { SummaryCard } from "../components/dashboard/SummaryCard";
import Link from "next/link";

export default async function Home() {
  const expenseList = await getExpenses();
  const totalExpenses = calculateTotalExpenses(expenseList);
  const mostExpensive = getMostExpensiveExpense(expenseList);
  const leastExpensive = getLeastExpensiveExpense(expenseList);
  const categoryCount = Object.keys(getCategoryTotals(expenseList)).length;
  const recentExpenses = expenseList.slice(0, 5);

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="text-sm text-muted">
        Track your expenses and review your recent spending.
      </p>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-medium tracking-tight">Overview</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            label="Total Expenses"
            value={`$${totalExpenses.toFixed(2)}`}
          />
          <SummaryCard
            label="Most Expensive"
            value={mostExpensive ? `$${mostExpensive.amount.toFixed(2)}` : "N/A"}
          />
          <SummaryCard
            label="Least Expensive"
            value={leastExpensive ? `$${leastExpensive.amount.toFixed(2)}` : "N/A"}
          />
          <SummaryCard
            label="Categories Tracked"
            value={`${categoryCount}`}
          />
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium tracking-tight">
            Recent Expenses
          </h2>
          <Link href="/expenses" className="text-sm text-accent hover:underline">
            View All
          </Link>
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {recentExpenses.length === 0 ? (
            <p className="text-sm text-muted">No expenses recorded yet.</p>
          ) : (
            recentExpenses.map((expense) => (
              <ExpenseListItem key={expense.id} expense={expense} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}