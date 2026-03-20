import { pgTable, text, numeric, timestamp, date } from "drizzle-orm/pg-core";

export const expenses = pgTable("expenses", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  amount: numeric("amount").notNull(),
  category: text("category").notNull(),
  expenseDate: date("expense_date", { mode: "string" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  note: text("note"),
});