const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
    S3Client,
    GetObjectCommand,
    PutObjectCommand,
} = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const fs = require("fs");

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "AKIAXX7KJXGNAKP7UDTB",
        secretAccessKey: "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",
    },
});

// async function getObjectURL(key){
//     const command = new GetObjectCommand({
//         Bucket: "mlsa.bucket",
//         Key:key
//     })
//     const url =  await getSignedUrl(s3Client,command)
//     return url
// }

// async function putObject(filename, contentType){
//     const command = new PutObjectAclCommand({
//         Bucket: "mlsa.bucket",
//         Key:`/uploads/${filename}`,
//         ContentType: contentType
//     })
//     const url =  await getSignedUrl(s3Client,command)
//     return url
// }

function getObjectURL(key) {
    // Replace "mlsa.bucket" with your actual S3 bucket name
    const bucketName = "mlsa.bucket";

    // Replace "your-s3-region" with your actual AWS S3 region
    const s3Region = "ap-south-1";

    // Construct the public URL
    const url = `https://s3.${s3Region}.amazonaws.com/${bucketName}/uploads/${key}`;

    return url;
}

console.log("URL S3", getObjectURL("image-1698501542310.LevelAlpha.png"));

async function putObject(filename, contentType, url1) {
    // Replace "mlsa.bucket" with your actual S3 bucket name
    const bucketName = "mlsa.bucket";
    const s3Region = "ap-south-1";

    const params = {
        Bucket: bucketName,
        Key: `uploads/${filename}`,
        ContentType: contentType,
        Body: url1.buffer,
    };

    const upload = new Upload({
        client: s3Client,
        params: params,
    });

    try {
        const result = await upload.done();
        // console.log(result);
        // If successful, construct the public URL
        const publicURL = `https://${bucketName}.s3.${s3Region}.amazonaws.com/uploads/${filename}`;

        return publicURL;
    } catch (error) {
        console.error("Error uploading object:", error);
        throw error;
    }
}

const uploadURL = async (url1) => {
    console.log("s3 url1", url1.mimetype);
    try {
        // const filePath = "./uploads/MyGoals.png";
        // const yourFileStream = fs.createReadStream(url1);
        const urlImage = await putObject(
            url1.originalname,
            url1.mimetype,
            // yourFileStream,
            url1
        );
        console.log("File uploaded successfully. Public URL:", urlImage);
        return urlImage;
    } catch (error) {
        console.error("Error uploading file:", error);
    }
};
// console.log(url1);
module.exports = {
    uploadURL,
    putObject,
    getObjectURL,
};