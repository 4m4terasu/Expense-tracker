import { db } from "@/db";
import { expenses } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import type { Expense, ExpenseCategory } from "@/app/types/expense";

export async function getExpenses(): Promise<Expense[]> {
  const rows = await db.select().from(expenses).orderBy(desc(expenses.expenseDate));

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    amount: parseFloat(row.amount),
    category: row.category as ExpenseCategory,
    createdAt: new Date(`${row.expenseDate}T00:00:00`),
    note: row.note || undefined,
  }));
}

export async function getExpenseById(id: string): Promise<Expense | null> {
  const rows = await db.select().from(expenses).where(eq(expenses.id, id)).limit(1);

  const row = rows[0];

  if (!row) {
    return null;
  }

  return {
    id: row.id,
    title: row.title,
    amount: parseFloat(row.amount),
    category: row.category as ExpenseCategory,
    createdAt: new Date(`${row.expenseDate}T00:00:00`),
    note: row.note || undefined,
  };
}