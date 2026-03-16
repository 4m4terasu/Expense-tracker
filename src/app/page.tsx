export default function Home() {
  return (
    <div className="content p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="text-sm text-slate-600">Track your expenses and review your recent spending.</p>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-medium tracking-tight">Overview</h2>
        <div className="grid gap-4">
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Total Expenses</p>
            <p className="text-2xl font-semibold tracking-tight">$1,234.56</p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Most Expensive</p>
            <p className="text-2xl font-semibold tracking-tight">$1,234.56</p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Least Expensive</p>
            <p className="text-2xl font-semibold tracking-tight">$1,234.56</p>
          </div>
          <div className="rounded-2xl bg-white border shadow-sm p-4">
            <p className="text-sm text-slate-600">Categories</p>
            <p className="text-2xl font-semibold tracking-tight">6</p>
          </div>
        </div>
      </section>

      <div className="h-40 rounded-2xl bg-white border shadow-sm"> 
        <div className="p-4">
          <h2 className="text-lg font-medium tracking-tight">Expense Summary</h2>
          <p className="text-sm text-slate-600">This section will provide a summary of your expenses, including total spending, category breakdown, and recent transactions.</p>
        </div>
      </div>
    </div>
  );
}
