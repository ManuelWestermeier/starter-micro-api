const fs = require("fs");

fs.writeFileSync("test.txt", "Hello World " + Math.random(), "utf-8");

require('http').createServer((req, res) => {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Nice To Fuck You');
    res.end();
}).listen(process.env.PORT || 3000)
