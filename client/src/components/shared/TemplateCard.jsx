import React from "react";
import axios from "axios";
import { useUser } from "../../util/store";
import { redirect, useNavigate } from "react-router-dom";

function TemplateCard({ id, name, image, type }) {
  const token = useUser((state) => state.token);
  const user = useUser((state) => state.user);

  const navigate = useNavigate();

  const createNew = async () => {
    console.log("getting here");
    try {
      axios
        .post(
          "http://localhost:3001/api/new",
          {
            userId: user._id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token,
            },
          }
        )
        .then((response) => {
          const doc = response.data.doc;

          const id = doc._id;

          navigate(`/documents/` + id);
        })
        .catch(function (error) {
          if (error.response.status == 401) {
            navigate(`/login`);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      onClick={() => createNew()}
      className="flex cursor-pointer flex-col gap-2 m-4"
      title={`Create New ${name} Document`}
    >
      <div className="overflow-hidden rounded-sm hover:border-blue-400   border-[1px] duration-150 transition-all ease-in-out">
        <img className="z-[1]" src={image}></img>
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] ">{name}</span>
        <span className="text-[14px] font-light">{type}</span>
      </div>
    </div>
  );
}

export default TemplateCard;
