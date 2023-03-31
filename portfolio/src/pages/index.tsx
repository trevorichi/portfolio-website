import { Inter } from "next/font/google";
import Landing from "./components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <div>
      <Landing></Landing>
    </div>
  );
}
