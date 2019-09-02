const { login } = require('../controller/user')
const { SuccessModule, ErrorModule  } = require('../module/resModule')
const handleUserRouter = (req, res) => {
    const method = req.method
    const path = req.url.split('?')[0]

    // 登录
    if (method === 'POST' && path === '/api/user/login') {
        // console.log(req.body)
        const username = req.body.username
        const password = req.body.password
        const result = login(username, password)
        if(result) {
            return new SuccessModule()
        } else {
            return new ErrorModule('登录失败')
        }
    }
}
module.exports = handleUserRouter