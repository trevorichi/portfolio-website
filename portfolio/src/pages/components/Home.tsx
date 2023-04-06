import Layout from "./Layout";
export default function Home() {
  return (
    <>
      <Layout>
        <div className="max-w-2xl mx-auto">
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none">
                <div className="inline-block pr-5">June 2022 - Present</div>
                <div className="badge badge-primary inline-block">Current</div>
              </time>
              <h3 className="text-lg font-semibold">
                DevOps Engineer Consultant - Cardworks
              </h3>
              <ul className="list-disc px-4">
                <li>
                  Powershell scripting to provide automation for our teams
                </li>
                <li>Setting up CI/CD for our Development Teams applications</li>
                <li>
                  I rewrote and improved our daily HR file generation, I rewrote
                  in Python/Powershell and the files went from being generated
                  in 4 hours to 15 minutes.
                </li>
                <li className="mb-5">
                  I am solely responsible for most of the internal tooling that
                  the department required. Click to learn about what I have made
                  so far.
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 "
              >
                <label htmlFor="my-modal-4">Learn More!</label>
                <input
                  type="checkbox"
                  id="my-modal-4"
                  className="modal-toggle hover:scale-110"
                />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                  <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Internal Tooling:</h3>
                    <p className="py-4">
                      I created a C# Web App using Razor pages for our End user
                      Computing team to login in to and complete a survey
                      regarding conference room readiness. The app was
                      containarized and deployed on our companies internal
                      network. I also configured CI/CD for the project, using
                      Github Actions and Octopus Deploy
                      <br></br>
                      <br></br>I created a Python desktop application that is
                      used by our sister Company Merrick Bank to complete
                      testing of there Credit Card Application process. This was
                      a critical project and is responsible for making our bank
                      a significant amount of money.
                    </p>
                  </label>
                </label>
                <svg
                  className="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                March 2022 - Present
              </time>
              <h3 className="text-xl font-semibold">
                Software Developer and Consultant - Genesis10
              </h3>
              <ul className="list-disc px-4">
                <li>
                  Chosen for a highly selective software developer training
                  program - less than 5% of applicants are accepted
                </li>
                <li>Completed an intense 14 week training Program in:</li>
              </ul>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                April 2022
              </time>
              <h3 className="text-xl font-semibold">
                This will be Tesla, working with customers, building teamwork
                etc
              </h3>
              <p className="text-base font-normal text-gray-500">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                April 2022
              </time>
              <h3 className="text-xl font-semibold">
                This will be school with a learn more Model about my degree and
                what i learned
              </h3>
              <p className="text-base font-normal text-gray-500">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </Layout>
    </>
  );
}
