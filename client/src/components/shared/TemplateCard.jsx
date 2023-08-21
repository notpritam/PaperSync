import React from "react";

function TemplateCard({ id, name, image, type }) {
  return (
    <div className="flex flex-col gap-2 m-4">
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
