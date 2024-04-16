require('http').createServer((req, res) => {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Nice To Fuck You');
    res.end();
}).listen(process.env.PORT || 3000)
