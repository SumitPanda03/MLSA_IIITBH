const express = require("express");
const router = new express.Router();
const multer = require("multer");
const users = require("../model/userSchema");
const moment = require("moment");
const { uploadURL, putObject, getObjectURL } = require("../s3");
const { v4: uuidv4 } = require("uuid");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
    S3Client,
    GetObjectCommand,
    PutObjectCommand,
} = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const fs = require("fs");

// img storage path
const newLink =
    "https://s3.ap-south-1.amazonaws.com/mlsa.bucket/uploads/LevelNew.png";

const alphaLink =
    "https://s3.ap-south-1.amazonaws.com/mlsa.bucket/uploads/image-1698501542310.LevelAlpha.png";

const betaLink =
    "https://s3.ap-south-1.amazonaws.com/mlsa.bucket/uploads/image-1698592352371.LevelBeta.png";

const goldLink =
    "https://s3.ap-south-1.amazonaws.com/mlsa.bucket/uploads/LevelGold.png";
// product upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bucketName = process.env.bucketName;
const s3Region =process.env.region;
let finalLink;
router.post("/register", upload.single("photo1"), async (req, res) => {
    // console.log("req files", req.file);
    // console.log("req body", req.body);
    const file = req.file;
    // console.log(file);
    const { username, clgid, branch, gh, li, ig, mail, status } = req.body;
    // const Key = `images/${uuidv4()}.${file.originalname.split('.').pop()}`; // Generate a unique key for the S3 object
    // console.log("Image key = " ,Key);

    if (!username || !clgid || !branch || file.length === 0) {
        res.status(401).json({
            status: 401,
            message: "Fill all the data fields",
        });
    }
    if (status === "Alpha") finalLink = alphaLink;
    else if (status === "Gold") finalLink = goldLink;
    else if (status === "New") finalLink = newLink;
    else if (status === "Beta") finalLink = betaLink;
    else finalLink

    const url1 = await uploadURL(file);
    const url = `https://s3.${s3Region}.amazonaws.com/${bucketName}/uploads/${file.originalname}`;

    // console.log("URL", url1);
    try {
        const date = moment(new Date()).format("YYYY-MM-DD");
        const userData = new users({
            username: username,
            clgid: clgid,
            branch: branch,
            gh: gh,
            li: li,
            ig: ig,
            mail: mail,
            imgfront: url,
            imgback: finalLink,
            date: date,
        });
        // console.log("USer Data", userData);
        const finalData = await userData.save();
        res.status(201).json({ status: 201, finalData });
    } catch (error) {
        console.log(error);
        res.status(401).json({ status: 401, error });
    }
});

//product data get

router.get("/getdata", async (req, res) => {
    try {
        const getUser = await users.find().sort({ date: 1 });
        res.status(201).json({ status: 201, getUser });
        // console.log(getUser);
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});

module.exports = router;
