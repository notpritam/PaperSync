const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const socketio = require("socket.io");
const mongoose = require("mongoose");

const Docs = require("./models/docs");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening
const mainServer = server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const io = socketio(mainServer, {
  cors: {
    origin: "http://localhost:5173", // Adjust the origin to match your client's URL
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (id) => {
    const data = "";

    const document = await findDocumet(id);

    socket.join(id);
    // console.log(document, "this is documennt");

    socket.emit("load-document", document);
    socket.on("send-changes", (delta) => {
      // console.log(delta);

      socket.broadcast.to(id).emit("receive-changes", delta);
    });

    socket.on("save-document", async (textData) => {
      const save = await Docs.findByIdAndUpdate(id, { textData });

      // console.log(save);
    });
  });
});

async function findDocumet(id) {
  const document = await Docs.findById(id);

  if (document) return document;

  return "Not Available";
}
