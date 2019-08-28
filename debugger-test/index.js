const http = require('http')
// const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])
    const resData = {
         url,
         method,
         path,
         query   
    }
    res.setHeader('Content-type', 'application/json')
    if(method === 'GET'){
        res.end(JSON.stringify(resData))
    }
    if(req.method === 'POST'){
        let postData = ''
        res.on('data', chunk => {
            postData += chunk.toString()
        })
        res.on('end',() => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }
})
server.listen(8080)
console.log('OK')