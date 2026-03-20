import { db } from "@/db";
import { expenses } from "@/db/schema";
import { desc } from "drizzle-orm";
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