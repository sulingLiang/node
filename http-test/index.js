const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    console.log('method:', method)
    const url = req.url
    console.log('url', url)
    const query = url.split('?')
    res.end(JSON.stringify(query))
})
server.listen(3000)
console.log('OK')