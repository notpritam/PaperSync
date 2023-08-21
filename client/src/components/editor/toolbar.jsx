import React, { useState } from "react";
import { Quill } from "react-quill";

import boldbutton from "../../assets/img/drawer/bold.svg";
import codebutton from "../../assets/img/drawer/code.svg";
import fxbutton from "../../assets/img/drawer/fx.svg";
import imagebutton from "../../assets/img/drawer/image.svg";
import italicboldbutton from "../../assets/img/drawer/italic.svg";
import itlaicNormalbutton from "../../assets/img/drawer/italic1.svg";
import linkbutton from "../../assets/img/drawer/link.svg";
import underorderlistbutton from "../../assets/img/drawer/list.svg";
import underlinebutton from "../../assets/img/drawer/underline.svg";
import videobutton from "../../assets/img/drawer/video.svg";
import orderedList from "../../assets/img/drawer/orderedlist.svg";
import undo from "../../assets/img/googleIcons/undo.svg";
import redo from "../../assets/img/googleIcons/redo.svg";
import print from "../../assets/img/googleIcons/print.svg";
import grammer from "../../assets/img/googleIcons/grammer.svg";
import paint from "../../assets/img/googleIcons/paint.svg";

const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "courier",
  "roboto",
  "sofia",
  "nunito",
  "mulish",
  "syne",
];

const icons = Quill.import("ui/icons");
icons.bold = null;
icons.italic = null;
icons.underline = null;
icons.list = null;
icons.link = null;
icons.image = null;
icons.video = null;
icons.formula = null;
icons["code-block"] = null;
icons.clean = null;

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },

  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

// Quill Toolbar component
export const QuillToolbar = (props) => (
  <div
    id="toolbar"
    className="tools-div border-none rounded-3xl m-4 mt-0 border-0"
  >
    <div className="tools-button">
      <span className="ql-formats">
        <select className="ql-header" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
        <select className="ql-font" defaultValue="roboto">
          <option value="roboto">Roboto</option>
          <option value="arial">Arial</option>
          <option value="courier">Courier Prime</option>
          <option value="syne">Syne</option>
          <option value="sofia">Sofia</option>
          <option value="nunito">Nunito</option>
          <option value="mulish">Mulish</option>
        </select>
      </span>
      <button className="h-[24px] w-[24px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
        <img src={undo}></img>
      </button>
      <button className="h-[24px] w-[24px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
        <img src={redo}></img>
      </button>
      <button className="h-[24px] w-[24px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
        <img src={print}></img>
      </button>
      <button className="h-[24px] w-[24px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
        <img src={grammer}></img>
      </button>
      <button className="h-[24px] w-[24px] p-4 rounded-full hover:bg-grayBg flex items-center justify-center">
        <img src={paint}></img>
      </button>

      {/* <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> */}
      <span className="ql-formats">
        <button className="ql-bold">
          {" "}
          <img className="back-button tool-button" src={boldbutton} alt="" />
        </button>

        {/* <IconButton className="ql-bold" color="primary">
        <img  className='back-button tool-button' src={boldbutton} alt=''/>
      </IconButton> */}

        <button className="ql-italic">
          <img
            className="back-button tool-button "
            src={itlaicNormalbutton}
            alt=""
          />
        </button>
        <button className="ql-underline">
          <img
            className="back-button tool-button"
            src={underlinebutton}
            alt=""
          />
        </button>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered">
          <img className="back-button tool-button" src={orderedList} alt="" />
        </button>
        <button className="ql-list" value="bullet">
          <img
            className="back-button tool-button"
            src={underorderlistbutton}
            alt=""
          />
        </button>
      </span>
      {/* <span className="ql-formats">
      <button className="ql-script" value="super">
         </button>
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span> */}

      <span className="ql-formats">
        <select className="ql-align" />
      </span>
      <span className="ql-formats">
        <button className="ql-link">
          <img
            className="back-button tool-button"
            onClick={null}
            src={linkbutton}
            alt=""
          />
        </button>
        <button className="ql-image">
          <img
            className="back-button tool-button"
            onClick={null}
            src={imagebutton}
            alt=""
          />
        </button>
        <button className="ql-video">
          <img
            className="back-button tool-button"
            onClick={null}
            src={videobutton}
            alt=""
          />
        </button>
      </span>
      <span className="ql-formats">
        <button className="ql-formula">
          <img
            className="back-button tool-button"
            onClick={null}
            src={fxbutton}
            alt=""
          />
        </button>
        <button className="ql-code-block">
          <img
            className="back-button tool-button"
            onClick={null}
            src={codebutton}
            alt=""
          />
        </button>
        <button className="ql-clean">
          <img
            className="back-button tool-button"
            onClick={null}
            src={italicboldbutton}
            alt=""
          />
        </button>
      </span>
      <span className="ql-formats">
        <button className="ql-undo">
          <CustomUndo />
        </button>
        <button className="ql-redo">
          <CustomRedo />
        </button>
      </span>
    </div>
  </div>
);

export default QuillToolbar;
