import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import RotatingGlobe from "./components/RotatingGlobe";
const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <>
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md pb-6">
            <h2 className="text-2xl font-bold pb-5">Welcome to My World</h2>
            <RotatingGlobe></RotatingGlobe>
            <div className="pt-6"></div>
            <Link href="/components/Landing" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div> */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <RotatingGlobe></RotatingGlobe>
          <div>
            <h1 className="text-5xl font-bold">Trevor Santoli</h1>
            <p className="py-6">
              Hello! My name is Trevor and I currently a DevOps Engineer who is
              passionate about technology! Take a step into my world and learn
              more about me!
            </p>
            <Link href="/components/Home" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
