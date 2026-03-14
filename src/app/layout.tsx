import "./globals.css";

//export const metadata: Metadata = {
//  title: "...",
//  description: "...",
//};

export default function RootLayout({children,}: {  children: React.ReactNode}) {
  return (

<html lang="en">
  <body>
    <div>
      <header>
        <h1>CR7</h1>
          <nav>
              <a href="/">Home</a>
          </nav>  
      </header>
      <main>
        {children}
      </main>
    </div>
  </body>
</html>
  );
}