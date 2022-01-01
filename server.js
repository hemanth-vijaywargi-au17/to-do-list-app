// Dependencies
const express = require("express");
const { resolve } = require("path");

// Server
const app = express();
const PORT = process.env.PORT || 2000;

// Statically Serving Build Folder
const buildFolderPath = resolve(__dirname, "./build");
app.use(express.static(buildFolderPath));

// All Routes go to index.html
app.get("*", (req, res) => {
  res.sendFile(`${buildFolderPath}/index.html`);
});

// Starting the Server
app.listen(PORT, () => {
  console.log(`app listening on port : ${PORT}`);
});
