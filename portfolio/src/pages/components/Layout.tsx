import { Inter } from "next/font/google";
import Navbar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
