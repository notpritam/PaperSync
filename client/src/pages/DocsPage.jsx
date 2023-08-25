import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { formats, modules } from "../components/editor/toolbar";
import { useNavigate, useParams } from "react-router-dom";
import { useModal, useUser } from "../util/store";
import DocHeader from "../components/shared/DocHeader";
import Editor from "../components/editor/Editor";
import axios from "axios";

function DocsPage({ title }) {
  const [editorToolOpen, setEditorToolOpen] = useState(true);
  const { id } = useParams();
  const token = useUser((state) => state.token);
  const user = useUser((state) => state.user);
  const navigate = useNavigate();
  const setModal = useModal((state) => state.setModal);

  setModal("loading");

  const checkAccess = () => {
    axios
      .post(
        "http://localhost:3001/api/checkAccess",
        {
          id: id,
          userId: user._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setModal(null);
      })
      .catch((err) => {
        console.log(err);
        // navigate("/error");
        setModal("not-access");
      });
  };

  useEffect(() => {
    checkAccess();
  }, []);

  return (
    <>
      <main className="w-screen h-screen overflow-hidden">
        <DocHeader _id={id} token={token} />
        <EditorToolbar editorToolOpen={editorToolOpen} />
        <div className="w-full h-full">
          <div className="m-auto flex items-center justify-center h-full border-[1px]  p-2 mt-2">
            <div className="max-w-[1040px] h-full w-full">
              <Editor id={id} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DocsPage;
