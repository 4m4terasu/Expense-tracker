import { db } from "./index";
import { expenses } from "./schema";

async function seed() {
  const existingExpenses = await db.select().from(expenses);

  if (existingExpenses.length > 0) {
    console.log("Expenses already seeded. Skipping seeding.");
    return;
  }

  const sampleExpenses = [
    {
      id: "1",
      title: "Groceries",
      amount: "150.75",
      category: "food",
      expenseDate: "2026-03-20",
      note: "Weekly grocery shopping",
    },
    {
      id: "2",
      title: "Electricity Bill",
      amount: "60.50",
      category: "bills",
      expenseDate: "2026-03-18",
    },
    {
      id: "3",
      title: "Movie Night",
      amount: "30.00",
      category: "entertainment",
      expenseDate: "2026-03-15",
      note: "Tickets for movie night",
    },
  ];

  await db.insert(expenses).values(sampleExpenses);
}

async function main() {
  await seed();
  console.log("Database seeding completed.");
}

main().catch((error) => {
  console.error("Seeding failed:", error);
});