const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandler = (req, res) => {
    // 设置数据返回形式 json
    res.setHeader('Content-type', 'application-type; charset=utf-8')

    // 设置query
    const url = req.url
    req.query = querystring.parse(url.split('?')[1])

    // 设置博客数据
    const blogData = handleBlogRouter(req, res)
    if(blogData){
        res.end(
            encodeURI(JSON.stringify(blogData))
        )
        return 
    }

    // 设置登录
    const userData = handleUserRouter(req, res)
    if(userData){
        res.end(JSON.stringify(userData))
        return
    }

    // 链接找不到
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('404 not found')
    res.end()
}
module.exports = serverHandler