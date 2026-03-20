"use server";

import { db } from "@/db";
import { expenses } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteExpense(formData: FormData) {
  const id = formData.get("id");

  if (typeof id !== "string" || !id) {
    throw new Error("Expense id is required.");
  }

  await db.delete(expenses).where(eq(expenses.id, id));

  revalidatePath("/");
  revalidatePath("/expenses");
}