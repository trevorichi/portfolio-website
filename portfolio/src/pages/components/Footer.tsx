import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <p>
            Trevor Santoli
            <br />
            Providing good code and smiles since 1999.
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/trevorichi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/trevor-santoli-934197200/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={25} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
