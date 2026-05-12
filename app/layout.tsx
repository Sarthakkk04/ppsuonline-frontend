import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyApplyButton from "@/components/ui/StickyApplyButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <StickyApplyButton />
        <Footer />
      </body>
    </html>
  );
}