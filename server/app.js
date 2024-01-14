require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { uploadURL, putObject, getObjectURL } = require("./s3");
const port = process.env.PORT || 8005;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(router);
app.use("/uploads",router);
// uploadURL()
app.get("/", (req, res) => {
    res.status(200).send("<h1>Heartbeat-OK</h1>");
});
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
