import "./globals.css";

export const metadata = {
  title: "Xora Society Portal",
  description: "Login via Discord",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
