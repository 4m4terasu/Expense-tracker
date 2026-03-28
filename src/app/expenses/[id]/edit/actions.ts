"use server";

import { db } from "@/db";
import { expenses } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateExpense(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const category = formData.get("category") as string;
  const date = formData.get("date") as string;
  const note = formData.get("note") as string;

  if (!id || !title || isNaN(amount) || amount <= 0 || !category || !date) {
    throw new Error("Id, title, amount, category, and date are required.");
  }

  await db
    .update(expenses)
    .set({
      title: title.trim(),
      amount: String(amount),
      category,
      expenseDate: date,
      note: note?.trim() ? note.trim() : null,
    })
    .where(eq(expenses.id, id));

  revalidatePath("/");
  revalidatePath("/expenses");
  revalidatePath(`/expenses/${id}/edit`);
  redirect("/expenses");
}