import { useDrawer, useUser } from "../../util/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Drawer = () => {
  const drawerCtx = useDrawer((state) => state.drawer);
  const setDrawer = useDrawer((state) => state.setDrawer);
  const title = useUser((state) => state.docTitle);
  const [email, setEmail] = useState();
  const token = useUser((state) => state.token);
  const document = useUser((state) => state.document);
  const navigate = useNavigate();

  const currentDrawer = () => {
    switch (drawerCtx) {
      case "sidebar":
        return (
          <div
            // onClick={() => setModal(null)}
            className="absolute top-0 backdrop-blur-sm  bg-opacity-20 bg-black transition-all duration-200 ease-in-out bottom-0  h-screen w-screen "
          >
            <div className="w-[20vw] absolute left-0 top-0 bg-white h-full">
              Test
            </div>
          </div>
        );
      case "not-access":
        return (
          <div
            // onClick={() => setModal(null)}
            className="absolute z-[1000] top-0 backdrop-blur-sm  bg-opacity-20 bg-black transition-all duration-200 ease-in-out bottom-0  h-screen w-screen flex m-auto justify-center items-center"
          >
            <div className="min-w-[30vw] w-[30vw] shadow-2xl rounded-lg p-4 flex flex-col gap-4 overflow-hidden border-[1px]  bg-white min-h-[30vh]">
              <span className="text-2xl">You need permission</span>
              <span className="">
                You are not authorized to view this document at the moment,
                contact the owner to gain permission to this document
              </span>
              <button
                onClick={() => {
                  navigate("/");
                  setDrawer(null);
                }}
                className="w-full bg-blue-400 p-2 rounded-lg text-white hover:shadow-xl duration-200 ease-in-out transition-all border-[1px] border"
              >
                Close
              </button>
            </div>
          </div>
        );
      case "loading":
        return (
          <div
            // onClick={() => setModal(null)}
            className="absolute z-[1000] top-0 backdrop-blur-sm  bg-opacity-20 bg-black transition-all duration-200 ease-in-out bottom-0  h-screen w-screen flex m-auto justify-center items-center"
          >
            <div className="min-w-[30vw] w-[30vw] shadow-2xl items-center justify-center   rounded-lg p-4 flex flex-col gap-4 overflow-hidden border-[1px]  bg-white min-h-[30vh]">
              <span className="text-2xl">Loading...</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{currentDrawer()}</div>;
};

export default Drawer;
