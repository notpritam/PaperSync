import React from "react";
import docs from "../../assets/document.png";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

function DocumentCard({ id, name, image, date, type }) {
  return (
    <a href="/doc" className="mb-4">
      <div className="flex justify-between  h-full flex-col gap-2 p-2 m-2 border-[1px] hover:border-blue-400 rounded-sm   duration-150 transition-all ease-in-out">
        <div className="overflow-hidden mt-2 rounded-sm border-b-[1px]">
          <img className="z-[1]" src={image}></img>
        </div>
        <div className="flex flex-col gap-[2px] p-2 pt-1">
          <span className="text-[14px]  text-ellipsis line-clamp-1">
            {name}
          </span>
          <div className="flex gap-[2px] justify-between items-center">
            <div className="flex items-end gap-[2px]">
              <img className="h-[24px] w-[24px]" src={docs}></img>
              {type == "shared" ? <PeopleAltOutlinedIcon /> : null}
              <span className="text-[12px] tracking-[.3px] text-subtitleText">
                {date}
              </span>
            </div>
            <button className="h-[32px] w-[32px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
              <MoreVertRoundedIcon />
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default DocumentCard;
