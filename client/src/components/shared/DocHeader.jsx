import React, { useEffect, useState } from "react";
import useUser from "../../util/store";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import axios from "axios";

function DocHeader({ _id, token, _title }) {
  const docTitle = useUser((state) => state.docTitle);
  const setDocTitle = useUser((state) => state.setDocTitle);

  const [title, setTitle] = useState(docTitle);
  const user = useUser((state) => state.user);

  const imageUrl = user.imageUrl;
  var timeoutId = null;

  useEffect(() => {
    const delayedTime = setTimeout(() => {
      updateTitle();
    }, 2000);

    return () => {
      clearTimeout(delayedTime);
    };
  }, [title]);

  const updateTitle = () => {
    axios
      .post(
        "http://localhost:3001/api/updateTitle",
        {
          _id: _id,
          title: docTitle,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res, "this is res");
      })
      .catch((error) => {
        console.log("this si errir", error);
      });
  };

  return (
    <header className="bg-white top-0 sticky z-[999] flex justify-between w-full  p-2">
      <div className="flex items-center">
        <div>
          <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"></img>
        </div>
        <div className="flex flex-col gap-[4px] ">
          <div className="flex ">
            <input
              className=""
              placeholder="Doc Title Here"
              value={docTitle}
              onChange={(e) => {
                setTitle(e.target.value);
                setDocTitle(e.target.value);
              }}
            ></input>
            <div className="flex gap-2">
              <StarBorderOutlinedIcon />
              <DriveFileMoveOutlinedIcon />
              <CloudDoneOutlinedIcon />
            </div>
          </div>
          <div className="flex gap-4 text-[14px]">
            <button>File</button>
            <button>Edit</button>
            <button>View</button>
            <button>Insert</button>
            <button>Format</button>
            <button>Tools</button>
            <button>Extensions</button>
            <button>Help</button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="h-[48px] w-[48px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center">
          <HistoryOutlinedIcon />
        </button>
        <button className="h-[48px] w-[48px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center">
          <CommentOutlinedIcon />
        </button>
        <button className="h-[48px] w-[48px] rounded-full hover:bg-[#f0f3f5] flex items-center justify-center">
          <VideocamOutlinedIcon />
        </button>

        <div className="bg-[#c3e6ff] hover:shadow-md transition-all duration-150 ease-in p-2 pl-4 pr-4  rounded-3xl">
          <button className="text-[14px] flex gap-2 items-center">
            <LockOutlinedIcon />
            Share
          </button>
        </div>

        <div className="bg-red-500 overflow-hidden h-10 w-10 rounded-full hover:shadow-xl transition-all duration-200 ease-in hover:border-[4px] border-[#c3e6ff] flex justify-center items-center">
          <img
            src={imageUrl}
            className="w-full h-full object-cover object-center"
          ></img>
        </div>
      </div>
    </header>
  );
}

export default DocHeader;
