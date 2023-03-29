import Navbar from "./NavBar";
import Footer from "./Footer";
import RotatingGlobe from "./RotatingGlobe";

export default function Landing() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">Welcome to My World</h2>
            <RotatingGlobe></RotatingGlobe>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
