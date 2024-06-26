import { Inter } from "next/font/google";
import "./styles/globals.css";
import Nav from "@/components/Navbar";
import Starfield from 'react-starfield';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Souvik's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Nav/>
      <Starfield
        starCount={10000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />
          {children}
      </body>
    </html>
  );
}
