import { calculateTotalExpenses, getCategoryTotals, getMostExpensiveExpense, getLeastExpensiveExpense, sortExpensesByDate } from "./lib/expenses/expense-utils";
import { expenses } from "./lib/expenses/expense-data";
import { ExpenseListItem } from "../components/expenses/ExpenseListItem";
  
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
        <div className="grid gap-4">
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Total Expenses</p>
            <p className="text-2xl font-semibold tracking-tight">${totalExpenses.toFixed(2)}</p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Most Expensive</p>
            <p className="text-2xl font-semibold tracking-tight">{mostExpensive !== null ? `$${mostExpensive.amount.toFixed(2)}` : "-"}</p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Least Expensive</p>
            <p className="text-2xl font-semibold tracking-tight">{leastExpensive !== null ? `$${leastExpensive.amount.toFixed(2)}` : "-"}</p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Categories</p>
            <p className="text-2xl font-semibold tracking-tight">{categoryCount}</p>
          </div>
        </div>

      </section>

      <section>
        <h2 className="text-xl font-medium tracking-tight">Recent Expenses</h2>
          <div className="mt-4 rounded-2xl bg-white border shadow-sm p-4">
            {recentExpenses.map((expense) => (
                <ExpenseListItem key={expense.id} expense={expense} />
              ))}
          </div>
      </section>
    </div>
  );
}
