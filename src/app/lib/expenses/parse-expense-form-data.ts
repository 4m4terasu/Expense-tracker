type ExpenseFormValues = {
  title: string;
  amount: number;
  category: string;
  date: string;
  note: string | null;
};

type ParseExpenseFormResult =
  | { success: true; data: ExpenseFormValues }
  | { success: false; error: string };

export function parseExpenseFormData(
  formData: FormData
): ParseExpenseFormResult {
  const rawTitle = formData.get("title");
  const rawAmount = formData.get("amount");
  const rawCategory = formData.get("category");
  const rawDate = formData.get("date");
  const rawNote = formData.get("note");

  const title = typeof rawTitle === "string" ? rawTitle.trim() : "";
  const amountString = typeof rawAmount === "string" ? rawAmount.trim() : "";
  const category = typeof rawCategory === "string" ? rawCategory.trim() : "";
  const date = typeof rawDate === "string" ? rawDate.trim() : "";
  const noteValue = typeof rawNote === "string" ? rawNote.trim() : "";

  if (!title) {
    return {
      success: false,
      error: "Title is required.",
    };
  }

  const amount = Number(amountString);

  if (Number.isNaN(amount) || amount <= 0) {
    return {
      success: false,
      error: "Amount must be greater than 0.",
    };
  }

  if (!category) {
    return {
      success: false,
      error: "Category is required.",
    };
  }

  if (!date) {
    return {
      success: false,
      error: "Date is required.",
    };
  }

  return {
    success: true,
    data: {
      title,
      amount,
      category,
      date,
      note: noteValue ? noteValue : null,
    },
  };
}