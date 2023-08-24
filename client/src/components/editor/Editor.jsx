import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "./toolbar";
import { io } from "socket.io-client";
import { useUser } from "../../util/store";

function Editor({ id }) {
  const [editorValue, setEditorValue] = useState("");
  const quillRef = useRef();
  const [socket, setSocket] = useState();
  const setTitle = useUser((state) => state.setDocTitle);
  const setdocument = useUser((state) => state.setDocument);

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
      setTitle(document.title);
      setdocument(document);

      quillRef?.current.getEditor().enable();
      quillRef?.current.getEditor().setContents(textData);
      console.log("this is document", document);
      // setTitle(document.title);
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
      console.log("saving data every 3sec");
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quillRef, editorValue]);
  return (
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
      readOnly
    />
  );
}

export default Editor;
