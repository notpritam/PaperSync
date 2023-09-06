import React from "react";
import { useModal, useUser } from "../../util/store";
import deleteImg from "../../assets/img/delete.svg";
import axios from "axios";

function AccessCard({ people, docId }) {
  const user = useUser((state) => state.user);
  const setModal = useModal((state) => state.setModal);
  const setDocument = useUser((state) => state.setDocument);
  const token = useUser((state) => state.token);
  console.log(people);

  const openModal = (id, data) => {
    setModal({
      modal: id,
      modalData: data,
    });
  };

  const removeAccess = () => {
    axios
      .post(
        "http://localhost:3001/api/removeAccess",
        {
          docId: docId,
          userId: people._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        const document = res.data.doc;
        console.log(document, "this is document after Removing Access");
        setDocument(document);
      })
      .catch((error) => {
        console.log(error);
        setModal({
          modal: null,
          modalData: null,
        });
      });
  };

  return (
    <div className="flex gap-2">
      <div className="h-[40px] w-[40px] rounded-full overflow-hidden border-[1px]">
        <img src={people.imageUrl}></img>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px]">
          {people.name} {people._id == user._id ? "(You)" : null}
        </span>
        <span className="text-[12px]">{people.email}</span>
      </div>
      {people._id == user._id ? null : (
        <div className="flex-1 flex justify-end items-center">
          <button
            onClick={() => removeAccess()}
            title="Remove Access"
            className="h-[32px] w-[32px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center"
          >
            <img className="h-[1.1rem] w-[1.1rem]" src={deleteImg}></img>
          </button>
        </div>
      )}
    </div>
  );
}

export default AccessCard;
