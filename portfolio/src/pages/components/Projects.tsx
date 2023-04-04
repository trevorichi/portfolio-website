import Layout from "./Layout";
import { RxArrowLeft } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
import { useEffect } from "react";
import { RxGithubLogo } from "react-icons/rx";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: (document.querySelector("#caro") as HTMLElement).offsetTop,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Layout>
        <div id="caro" className="carousel" autoFocus>
          <div id="slide1" className="carousel-item w-full">
            <div className="grid grid-cols-7 grid-rows-6 gap-0 min-h-screen min-w-full">
              <div className="col-start-1 col-end-6 row-start-1 row-end-5 flex justify-center items-center border-b border-t">
                <div className="aspect-w-16 aspect-h-9 w-full h-full">
                  <iframe
                    src="https://www.youtube.com/embed/-yT57ebQUIg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <div className="col-start-6 col-end-8 row-start-1 row-end-5 flex flex-col justify-center items-center border-l border-b border-t">
                <h1 className="text-2xl order-1">Description</h1>
                <p className="pl-6 pr-6 mt-5 order-2 hover:scale-105">
                  This project was the capstone project for my 3 month training
                  bootcamp provided by Genesis10. I was responsible for creating
                  the front end as well as stepping in to debug the backend when
                  needed. The main the backend was written in Java with a SQL
                  database and the front-end was created with React.
                  <br />
                  <br />
                  The Youtube video is the presentation that my team and I
                  delivered at the end of the bootcamp before I got placed at my
                  client.
                </p>
                <a
                  href="https://github.com/trevorichi/filmpire"
                  target="_blank"
                  rel="noreferrer"
                  className="order-3 mt-10 hover:scale-115"
                >
                  <RxGithubLogo
                    size={35}
                    className="transform hover:ring-2"
                  ></RxGithubLogo>
                </a>
              </div>
              <div className="col-start-1 col-end-6 row-start-5 row-end-7 flex justify-center items-center">
                <h2 className="text-3xl hover:scale-125">Filmpire</h2>
              </div>
              <div className="col-start-6 col-end-7 row-start-5 row-end-7 flex justify-center items-center border-l">
                <a href="#slide3" className="hover:scale-125">
                  <RxArrowLeft size={47} />
                </a>
              </div>
              <div className="col-start-7 col-end-8 row-start-5 row-end-7 flex justify-center items-center ">
                <a href="#slide2" className="hover:scale-125">
                  <RxArrowRight size={47} />
                </a>
              </div>
            </div>
          </div>

          <div id="slide2" className="carousel-item w-full">
            <div className="grid grid-cols-7 grid-rows-6 gap-0 min-h-screen min-w-full">
              <div className="col-start-1 col-end-6 row-start-1 row-end-5 flex justify-center items-center border-b border-t">
                <h1>Pictures</h1>
              </div>
              <div className="col-start-6 col-end-8 row-start-1 row-end-5 flex justify-center items-center border-l border-b border-t">
                <h1>Description</h1>
              </div>
              <div className="col-start-1 col-end-6 row-start-5 row-end-7 flex justify-center items-center">
                <h2 className="text-lg ">name of project 1</h2>
              </div>
              <div className="col-start-6 col-end-7 row-start-5 row-end-7 flex justify-center items-center border-l">
                <a href="#slide1" className="hover:scale-125">
                  <RxArrowLeft size={47} />
                </a>
              </div>
              <div className="col-start-7 col-end-8 row-start-5 row-end-7 flex justify-center items-center">
                <a href="#slide3" className="hover:scale-125">
                  <RxArrowRight size={47} />
                </a>
              </div>
            </div>
          </div>

          <div id="slide3" className="carousel-item w-full h-screen">
            <div className="grid grid-cols-7 grid-rows-6 gap-0  min-h-screen min-w-full">
              <div className="col-start-1 col-end-6 row-start-1 row-end-5 flex justify-center items-center border-b border-t">
                <h1>Pictures</h1>
              </div>
              <div className="col-start-6 col-end-8 row-start-1 row-end-5 flex justify-center items-center border-l border-b border-t">
                <h1>Description</h1>
              </div>
              <div className="col-start-1 col-end-6 row-start-5 row-end-7 flex justify-center items-center">
                <h2 className="text-lg ">name of project 1</h2>
              </div>
              <div className="col-start-6 col-end-7 row-start-5 row-end-7 flex justify-center items-center border-l">
                <a href="#slide2" className="hover:scale-125">
                  <RxArrowLeft size={47} />
                </a>
              </div>
              <div className="col-start-7 col-end-8 row-start-5 row-end-7 flex justify-center items-center">
                <a href="#slide1" className="hover:scale-125">
                  <RxArrowRight size={47} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
