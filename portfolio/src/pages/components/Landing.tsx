import Link from "next/link";
import RotatingGlobe from "./RotatingGlobe";

export default function Landing() {
  return (
    <>
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
