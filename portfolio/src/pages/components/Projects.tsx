import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Layout from "./Layout";

export default function Projects() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-7 grid-rows-6 gap-0 bg-blue-950 min-h-screen bg-blue">
          <div className="col-start-1 col-end-6 row-start-1 row-end-5 flex justify-center items-center border">
            <h1>PICtURES</h1>
          </div>
          <div className="col-start-6 col-end-8 row-start-1 row-end-5 flex justify-center items-center border">
            <h1>Description</h1>
          </div>
          <div className="col-start-1 col-end-6 row-start-5 row-end-7 flex justify-center items-center border">
            <h2 className="text-lg ">name of project 1</h2>
          </div>
          <div className="col-start-6 col-end-7 row-start-5 row-end-7 flex justify-center items-center border">
            <GrLinkPrevious size={47} />
          </div>
          <div className="col-start-7 col-end-8 row-start-5 row-end-7 flex justify-center items-center border">
            <GrLinkNext size={47} className="text-white fill-current" />
          </div>
        </div>
      </Layout>
    </>
  );
}
