import { Poppins } from "next/font/google";
import "./globals.css";
import "./custom_theme.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Glass Desert Studios",
  author: "J.R. Masias",
  description:
    "Designed and developed by J.R. Masias @ Glass Desert Studios &copy; 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased  background_dark`}>
        <Navbar organization="Glass Desert Studios" />
        <main className="max-w-3xl mx-auto">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
