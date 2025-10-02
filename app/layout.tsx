// app/layout.tsx (The absolute root layout for the entire application)
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* TEACHER: This children prop will render either the (main) layout 
        or the (admin) layout, which then renders the specific page content. */}
        {children}
      </body>
    </html>
  );
}