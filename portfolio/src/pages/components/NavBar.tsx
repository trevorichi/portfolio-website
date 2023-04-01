import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="avatar">
            <div className="w-10 rounded-full hover:ring-2">
              <Link href="./Home">
                <img src="/headshot.png" alt="me" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="./Projects">Projects</Link>
            </li>
            <li>
              <Link href="./Experience">Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
