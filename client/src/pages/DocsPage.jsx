import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { formats, modules } from "../components/editor/toolbar";
import { useParams } from "react-router-dom";
import useUser from "../util/store";
import DocHeader from "../components/shared/DocHeader";
import Editor from "../components/editor/Editor";

function DocsPage({ title }) {
  const [editorToolOpen, setEditorToolOpen] = useState(true);
  const { id } = useParams();

  return (
    <>
      <main className="w-screen h-screen overflow-hidden">
        <DocHeader _id={id} token={token} _title={title} />
        <EditorToolbar editorToolOpen={editorToolOpen} />
        <div className="w-full h-full">
          <div className="m-auto flex items-center justify-center h-full border-[1px]  p-2 mt-2">
            <div className="max-w-[1040px] h-full w-full">
              {/* <ReactQuill
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
              /> */}

              <Editor id={id} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DocsPage;
