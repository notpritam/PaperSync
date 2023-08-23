import React, { useEffect, useRef, useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { formats, modules } from "../components/editor/toolbar";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

function DocsPage() {
  const [editorValue, setEditorValue] = useState("");
  const [editorToolOpen, setEditorToolOpen] = useState(true);
  const quillRef = useRef();
  const [title, setTitle] = useState("");

  const [socket, setSocket] = useState();

  const { id } = useParams();

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  const onEditorChange = (content, delta, source, editor) => {
    if (source !== "user") return;
    socket.emit("send-changes", delta);
  };

  useEffect(() => {
    if (socket == null) return;

    socket.once("load-document", (document) => {
      const textData = document.textData;
      quillRef?.current.getEditor().setContents(textData);
      quillRef?.current.getEditor().enable();
    });

    socket.emit("get-document", id);
  }, [socket, id]);

  useEffect(() => {
    if (!socket) return;

    const handler = (delta) => {
      const newContent = quillRef.current.getEditor().updateContents(delta);
    };

    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket]);

  useEffect(() => {
    if (socket == null) return;

    const interval = setInterval(() => {
      const textData = quillRef?.current.getEditor().getContents();

      socket.emit("save-document", textData);
      console.log(textData);
    }, 3000);
  }, [socket]);

  return (
    <>
      <main className="w-screen h-screen overflow-hidden">
        <header className="bg-white top-0 sticky z-[999] flex justify-between w-full  p-2">
          <div className="flex items-center">
            <div>
              <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"></img>
            </div>
            <div className="flex flex-col gap-[4px] ">
              <div className="flex ">
                <input className="" placeholder="Doc Title Here"></input>
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

            <div className="bg-red-500 h-10 w-10 rounded-full hover:shadow-xl transition-all duration-200 ease-in hover:border-[4px] border-[#c3e6ff] flex justify-center items-center">
              H
            </div>
          </div>
        </header>
        <EditorToolbar editorToolOpen={editorToolOpen} />
        <div className="w-full h-full">
          <div className="m-auto flex items-center justify-center h-full border-[1px]  p-2 mt-2">
            <div className="max-w-[1040px] h-full w-full">
              <ReactQuill
                className="h-full"
                ref={quillRef}
                theme="snow"
                defaultValue={editorValue}
                value={editorValue}
                paste
                onChange={onEditorChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
                // disable={true}

                readOnly
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DocsPage;
