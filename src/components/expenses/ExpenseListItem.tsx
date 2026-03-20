"use client";

import type { Expense } from "@/app/types/expense";

export const ExpenseListItem = ({
  expense,
  onDelete,
  onEdit,
}: {
  expense: Expense;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}) => {
  return (
    <div className="flex items-start justify-between border-b border-border px-4 py-4 transition-colors hover:bg-surface-soft">
      <div className="min-w-0">
        <p className="text-base font-medium text-foreground">{expense.title}</p>

        <p className="mt-2 inline-flex rounded-full bg-surface-soft px-2.5 py-1 text-xs font-medium capitalize text-muted">
          {expense.category}
        </p>
      </div>

      <div className="ml-6 flex items-start gap-6">
        <div className="min-w-[90px] text-right">
          <p className="text-base font-semibold text-foreground">
            ${expense.amount.toFixed(2)}
          </p>

          <p className="mt-2 text-xs text-muted">
            {expense.createdAt.toLocaleDateString()}
          </p>
        </div>

        {onDelete && (
          <div className="flex min-w-[64px] flex-col items-end gap-2">
            <button
              type="button"
              onClick={() => onEdit?.(expense.id)}
              className="rounded-md px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-white hover:text-muted">Edit</button>

            <button
              type="button"
              onClick={() => onDelete(expense.id)}
              className="rounded-md px-2 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};