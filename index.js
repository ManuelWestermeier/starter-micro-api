const fs = require("fs");

fs.writeFileSync("test.txt", "Hello World " + Math.random(), "utf-8");

require('http').createServer((req, res) => {
    res.end(fs.readFileSync("./text.txt"));
}).listen(process.env.PORT || 3000)
