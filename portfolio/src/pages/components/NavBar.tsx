import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="/headshot.png" alt="me" />
            </div>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="components/Projects">Projects</Link>
            </li>
            <li>
              <a>Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
