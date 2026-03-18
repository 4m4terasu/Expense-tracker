import { calculateTotalExpenses, getCategoryTotals, getMostExpensiveExpense, getLeastExpensiveExpense, sortExpensesByDate } from "./lib/expenses/expense-utils";
import { expenses } from "./lib/expenses/expense-data";
import { ExpenseListItem } from "../components/expenses/ExpenseListItem";
import { SummaryCard } from "../components/dashboard/SummaryCard";
import Link from "next/link";
  
export default function Home() {
const totalExpenses = calculateTotalExpenses(expenses);
const mostExpensive = getMostExpensiveExpense(expenses);
const leastExpensive = getLeastExpensiveExpense(expenses);
const categoryCount = Object.keys(getCategoryTotals(expenses)).length;
const recentExpenses = sortExpensesByDate(expenses, false).slice(0, 5);
  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="text-sm text-slate-600">Track your expenses and review your recent spending.</p>

      <section className="flex flex-col gap-4">

        <h2 className="text-xl font-medium tracking-tight">Overview</h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SummaryCard label="Total Expenses" value={`$${totalExpenses.toFixed(2)}`} />
          <SummaryCard label="Most Expensive" value={mostExpensive ? `$${mostExpensive.amount.toFixed(2)}` : "N/A"} />
          <SummaryCard label="Least Expensive" value={leastExpensive ? `$${leastExpensive.amount.toFixed(2)}` : "N/A"} />
          <SummaryCard label="Categories Tracked" value={`${categoryCount}`} />
        </div>

      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium tracking-tight">Recent Expenses</h2>
        <Link href="/expenses" className="text-sm text-blue-600 hover:underline">View All</Link>
        </div>
          <div className="mt-4 rounded-2xl bg-white border shadow-sm p-4">
            {recentExpenses.length === 0 ? (
                <p className="text-sm text-slate-600">No expenses recorded yet.</p>
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
