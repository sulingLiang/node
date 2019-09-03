const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return 
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}
const serverHandler = (req, res) => {
    // 设置数据返回形式 json
    res.setHeader('Content-type', 'application-type')

    // 设置query
    const url = req.url
    req.query = querystring.parse(url.split('?')[1])

    getPostData(req).then(postData => {
        req.body = postData
        // 设置博客数据
        /* const blogData = handleBlogRouter(req, res)
        if(blogData){
            res.end(JSON.stringify(blogData))
            return 
        } */
        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(blogData => {
                res.end(JSON.stringify(blogData))
                // encodeURI(res.end(JSON.stringify(blogData)),"utf-8")
            })
            return 
        }

        // 设置登录
        const userResult = handleUserRouter(req, res)
        if (userResult) {
            userResult.then(userData => {
                res.end(JSON.stringify(userData))
            })
            return
        }
       /*  if(userData){
            res.end(JSON.stringify(userData))
            return
        } */

        // 链接找不到
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.write('404 not found')
        res.end()
    })
}
module.exports = serverHandler