import { createExpense } from "./actions";

export default function AddExpensePage() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-3xl font-semibold tracking-tight">Add New Expense</h1>

      <p className="text-sm text-muted">Create a new expense record.</p>

      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <form action={createExpense} className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-sm font-medium tracking-tight text-foreground"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="e.g. Grocery Shopping"
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="amount"
              className="text-sm font-medium tracking-tight text-foreground"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              min="0.01"
              step="0.01"
              placeholder="e.g. 45.67"
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-sm font-medium tracking-tight text-foreground"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue=""
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="food">Food</option>
              <option value="bills">Bills</option>
              <option value="entertainment">Entertainment</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="shopping">Shopping</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="date"
              className="text-sm font-medium tracking-tight text-foreground"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              max={today}
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="note"
              className="text-sm font-medium tracking-tight text-foreground"
            >
              Note
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              placeholder="Optional notes about the expense"
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}