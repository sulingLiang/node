const { login } = require('../controller/user')
const { SuccessModule, ErrorModule  } = require('../module/resModule')
const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.url.split('?')[0]

    // 登录
    if (method === 'POST' && path === '/api/user/login') {
        const { username, password } = req.body
        const result = login(username, password)
        return result.then(data => {
            if (data.username) {
                return new SuccessModule(data)
            } 
            return new ErrorModule('登录失败')
        })
    }
}
module.exports = handleUserRouter