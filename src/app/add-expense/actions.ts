"use server";

import { db } from "@/db";
import { expenses } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createExpense(formData: FormData) {
  const title = formData.get("title") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const category = formData.get("category") as string;
  const date = formData.get("date") as string;
  const note = formData.get("note") as string;

  if (!title || isNaN(amount) || amount <= 0 || !date || !category) {
    throw new Error("Title, amount, category, and date are required.");
  }

  await db.insert(expenses).values({
    id: crypto.randomUUID(),
    title: title.trim(),
    amount: String(amount),
    category,
    expenseDate: date,
    note: note?.trim() ? note.trim() : null,
  });

  revalidatePath("/");
  revalidatePath("/expenses");
  redirect("/expenses");
}