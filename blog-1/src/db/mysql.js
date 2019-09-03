const { MYSQL_CONF } = require('../conf/db')

const mysql = require('mysql')

// 创建mysql对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: '3306',
    database: 'myblog'
})

// 开始连接
con.connect()

const exec = (sql) => {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
    return promise
}

module.exports = {
    exec
}
