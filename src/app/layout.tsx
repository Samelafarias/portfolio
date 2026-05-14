import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <NavBar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}