const { getList } = require('../controller/blog')
const { SuccessModule, ErrorModule } = require('../module/resModule')

const handleBlogRouter = (req, res) => {
    const method = req.method
    const path = req.url.split('?')[0]
    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author
        const keyword = req.query.keyword
        const list = getList(author, keyword)
        return new SuccessModule(list)
    }
    // 获取博客详情
    if (method == 'GET' && path === '/api/blog/detail') {
        return {
            msg: '这是获取博客详情的接口'
        }
    }
    // 新建博客
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '这是新建博客接口'
        }
    }
    // 更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '这是更新博客接口'
        }
    }
    // 删除博客
    if (method === 'POST' && path === '/api/blog/delete') {
        return {
            msg: '这是删除博客接口'
        }
    }
}

module.exports = handleBlogRouter