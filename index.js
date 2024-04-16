const AWS = require("aws-sdk");
const s3 = new AWS.S3()


const start = (async () => {

    // store something
    /*
    await s3.putObject({
        Body: "Hello, world",
        Bucket: "cyclic-long-teal-hare-toga-eu-west-3",
        Key: "some_files/my_file.json",
    }).promise()
    */

    require('http').createServer(async (req, res) => {

        res.end(await s3.getObject({
            //Bucket: "cyclic-long-teal-hare-toga-eu-west-3",
            Key: "some_files/my_file.json",
        }).promise());

    }).listen(process.env.PORT || 3000)
})()