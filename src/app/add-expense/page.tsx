export default function AddExpensePage() {
    return (
        <div className="p-4 flex flex-col gap-6">
            <h1 className="text-3xl font-semibold tracking-tight">Add New Expense</h1>
            <p className="text-sm text-slate-600">Create a new expense record.</p>
            <div className="rounded-2xl bg-white border shadow-sm p-4">
            <form className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm font-medium tracking-tight">Title</label>
                    <input type="text" id="title" name="title" className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Grocery Shopping"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="amount" className="text-sm font-medium tracking-tight">Amount</label>
                    <input type="number" id="amount" name="amount" className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. 45.67" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="category" className="text-sm font-medium tracking-tight">Category</label>
                    <select id="category" name="category" className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select a category</option>
                        <option value="food">food</option>
                        <option value="bills">bills</option>
                        <option value="entertainment">entertainment</option>
                        <option value="subscriptions">subscriptions</option>
                        <option value="shopping">shopping</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="date" className="text-sm font-medium tracking-tight">Date</label>
                    <input type="date" id="date" name="date" className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="note" className="text-sm font-medium tracking-tight">Note</label>
                    <textarea id="note" name="note" rows={3} className="rounded-md border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Optional notes about the expense"></textarea>
                </div>
                <button type="submit" className="mt-4 rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    Add Expense
                </button>
            </form>
            </div>
        </div>
    );
}
        