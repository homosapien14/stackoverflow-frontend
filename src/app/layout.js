// import Header from "@/components/organisms/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/organisms/footer";
import { Providers } from "@/redux/provider";
import store from "@/redux/store";
import Header from "@/components/organisms/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stackoverflow",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
