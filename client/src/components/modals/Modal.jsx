import { useModal, useUser } from "../../util/store";
import lock from "../../assets/img/googleIcons/lock.svg";
import AccessCard from "../shared/AccessCard";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const modalCtx = useModal((state) => state.modal);
  const setModal = useModal((state) => state.setModal);
  const title = useUser((state) => state.docTitle);
  const [email, setEmail] = useState();
  const token = useUser((state) => state.token);
  const document = useUser((state) => state.document);
  const setDocument = useUser((state) => state.setDocument);
  const navigate = useNavigate();
  const modalData = useModal((state) => state.modalData);

  const addAccess = () => {
    axios
      .post(
        "http://localhost:3001/api/addAccess",
        {
          id: document._id,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      )
      .then(function (response) {
        const document = response.data.doc;
        setDocument(document);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const currentModal = () => {
    switch (modalCtx) {
      case "access":
        return (
          <div
            // onClick={() => setModal(null)}
            className="absolute z-[1000] top-0 backdrop-blur-sm  bg-opacity-20 bg-black transition-all duration-200 ease-in-out bottom-0  h-screen w-screen flex m-auto justify-center items-center"
          >
            {/* <Box sx={boxStyles}>
              <CreateDevotional />
            </Box> */}
            <div className="min-w-[30vw] shadow-2xl rounded-lg p-4 flex flex-col gap-4 overflow-hidden border-[1px]  bg-white min-h-[30vh]">
              <div className="flex justify-between items-center">
                <span className="text-[1.25rem]">Share - {title}</span>
                <div className="flex gap-2">
                  <button
                    // onClick={() => openModal("test")}
                    className="h-[32px] w-[32px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center"
                  >
                    <img src={lock}></img>
                  </button>
                  <button
                    // onClick={() => openModal("test")}
                    className="h-[32px] w-[32px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center"
                  >
                    <img src={lock}></img>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full p-2 items-center justify-center">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border-[1px] rounded-lg"
                ></input>
                <div className="flex w-full flex-col gap-3">
                  <span>People with Access</span>
                  {document.access.map((people, index) => {
                    return (
                      <AccessCard
                        key={index}
                        people={people}
                        docId={document._id}
                      />
                    );
                  })}
                </div>
                {/* <div className="flex w-full flex-col gap-3">
                  <span>General Access</span>
                  <div className="flex gap-2">
                    <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-gray-300 flex items-center justify-center border-[1px]">
                      <img src={lock}></img>
                    </div>
                    <div className="flex flex-col">
                      <select name="accessLevel">
                        <option value="restricted">Restricted</option>
                        <option value="anyone">Anyone</option>
                      </select>
                      <span className="text-[12px]">
                        techupdate9931@gmail.com
                      </span>
                    </div>
                  </div>
                </div> */}

                <div className="flex justify-between w-full mt-4">
                  <div className="border-[1px] cursor-pointer border-blue-400 p-2 rounded-3xl pl-4 pr-4 bg-white text-black hover:shadow-2xl duration-150 transition-all ease-in-out">
                    Copy Link
                  </div>
                  <div
                    onClick={() => addAccess()}
                    className="border-[1px] bg-blue-400 p-2 rounded-3xl pl-4 pr-4 text-white flex items-center justify-center hover:shadow-2xl duration-150 transition-all ease-in-out"
                  >
                    Done
                  </div>
                </div>
              </div>
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
                  setModal({
                    modal: null,
                    modalData: null,
                  });
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

      case "remove-access":
        return (
          <div
            // onClick={() => setModal(null)}
            className="absolute z-[1000] top-0 backdrop-blur-sm  bg-opacity-20 bg-black transition-all duration-200 ease-in-out bottom-0  h-screen w-screen flex m-auto justify-center items-center"
          >
            <div className="min-w-[30vw] w-[30vw] shadow-2xl items-center justify-center   rounded-lg p-4 flex flex-col gap-4 overflow-hidden border-[1px]  bg-white min-h-[30vh]"></div>
          </div>
        );
      case "snack-error":
        return (
          <div className="absolute z-[1000] bottom-0  bg-opacity-20 bg-black transition-all duration-200 ease-in-out  flex m-auto justify-center items-center">
            <div>
              <img src={lock}></img>
            </div>
            <div>Error Reason</div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div>{currentModal()}</div>;
};

export default Modal;
