const express = require("express");
const app = express();
const port = 3010;
const cors = require("cors");
const router = require("./routes");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

//making the uploads and static folders public
app.use(express.static("static"));
app.use(express.static("uploads"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
