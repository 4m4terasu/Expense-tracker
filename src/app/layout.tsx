import "./globals.css";
import Link from "next/link";

//export const metadata: Metadata = {
//  title: "...",
//  description: "...",
//};

export default function RootLayout({children,}: {  children: React.ReactNode}) {
  return (

<html lang="en">
  <body className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-surface border-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <span className="text-lg font-bold">Expense Tracker</span>
          <nav className="flex items-center gap-2">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-surface-soft hover:text-foreground">
              Home
            </Link>
            <Link href="/expenses" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-surface-soft hover:text-foreground">
                Expenses
              </Link>
              <Link href="/add-expense" className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-surface-soft hover:text-foreground">
                Add Expense
              </Link>
            </nav>  
        </div>
      </header>
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
  </body>
</html>
  );
}