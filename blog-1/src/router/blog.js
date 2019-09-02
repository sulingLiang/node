const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModule, ErrorModule } = require('../module/resModule')

const handleBlogRouter = (req, res) => {
    const method = req.method
    const path = req.url.split('?')[0]
    const id = req.query.id
    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author
        const keyword = req.query.keyword
        const list = getList(author, keyword)
        return new SuccessModule(list)
    }
    // 获取博客详情
    if (method == 'GET' && path === '/api/blog/detail') {
        const data = getDetail(id)
        return new SuccessModule(data)
    }
    // 新建博客
    if (method === 'POST' && path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModule(data)
    }
    // 更新博客
    if (method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        if (result) {
            return new SuccessModule()
        } else {
            return new ErrorModule('更新博客失败')
        }
    }
    // 删除博客
    if (method === 'POST' && path === '/api/blog/delete') {
        const result = delBlog(id)
        if (result) {
            return new SuccessModule()
        } else {
            return new ErrorModule('删除博客失败')
        }
    }
}

module.exports = handleBlogRouter