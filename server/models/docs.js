const mongoose = require("mongoose");

const docSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Untitled",
    },
    access: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      default: "Blank",
    },
    textData: Object,
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Docs", docSchema);
