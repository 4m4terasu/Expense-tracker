import { notFound } from "next/navigation";
import { getExpenseById } from "@/app/lib/expenses/queries";
import { updateExpense } from "./action";

export default async function EditExpensePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const expense = await getExpenseById(id);

  if (!expense) {
    notFound();
  }

  const formattedDate = [
  expense.createdAt.getFullYear(),
  String(expense.createdAt.getMonth() + 1).padStart(2, "0"),
  String(expense.createdAt.getDate()).padStart(2, "0"),
].join("-");

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-3xl font-semibold tracking-tight">Edit Expense</h1>
      <p className="text-sm text-muted">Update your expense record.</p>

      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <form action={updateExpense} className="mt-4 flex flex-col gap-4">
        <input type="hidden" name="id" value={expense.id} />
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
              defaultValue={expense.title}
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
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
              step="0.01"
              defaultValue={expense.amount}
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
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
              defaultValue={expense.category}
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
            >
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
              defaultValue={formattedDate}
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
              defaultValue={expense.note ?? ""}
              className="rounded-md border border-border bg-white p-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}