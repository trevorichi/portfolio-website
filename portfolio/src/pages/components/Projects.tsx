import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Layout from "./Layout";
import { RxArrowLeft } from "react-icons/Rx";
import { RxArrowRight } from "react-icons/Rx";

export default function Projects() {
  return (
    <>
      <Layout>
        <div className="carousel" autoFocus>
          <div id="slide1" className="carousel-item w-full">
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
