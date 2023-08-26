import React from "react";
import { useUser } from "../../util/store";
import deleteImg from "../../assets/img/delete.svg";

function AccessCard({ people }) {
  const user = useUser((state) => state.user);
  console.log(people);
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
          <img
            title="Remove Access"
            className=" cursor-pointer h-[1.25rem] w-[1.25rem]"
            src={deleteImg}
          ></img>
        </div>
      )}
    </div>
  );
}

export default AccessCard;
