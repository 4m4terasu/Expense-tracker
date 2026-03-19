import "./globals.css";
import Link from "next/link";

//export const metadata: Metadata = {
//  title: "...",
//  description: "...",
//};

export default function RootLayout({children,}: {  children: React.ReactNode}) {
  return (

<html lang="en">
  <body className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span>Expense Tracker</span>
            <nav>
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-100">
                Home
              </Link>
              <Link href="/expenses" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-100">
                Expenses
              </Link>
              <Link href="/add-expense" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-100">
                Add Expense
              </Link>
            </nav>  
        </div>
      </header>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </div>
      </main>
  </body>
</html>
  );
}