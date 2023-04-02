import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxCode } from "react-icons/rx";
import { RxPencil2 } from "react-icons/rx";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="avatar">
            <div className="w-10 rounded-full hover:ring-2 hover:scale-105">
              <Link href="./Home">
                <img src="/headshot.png" alt="me" />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="pl-6 text-xl">Trevor Santoli</h2>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="https://github.com/trevorichi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <RxGithubLogo size={25}></RxGithubLogo>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/trevor-santoli-934197200/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <RxLinkedinLogo size={25} />
              </a>
            </li>
            <li>
              <Link href="./Projects">
                Projects<RxCode size={25}></RxCode>
              </Link>
            </li>
            <li>
              <Link href="./Contact">
                Contact
                <RxPencil2 size={25}></RxPencil2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
