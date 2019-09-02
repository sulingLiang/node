const mysql = require('mysql')

// 创建mysql链接
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: '3306',
    database: 'myblog'
})

// 开始连接
con.connect()

// sql查询
// const sql = `update users set realname='李四2' where username='lisi';` // update
// const sql = `insert into users(username, password, realname) values ('wangwu', '123', '王五') ` // insert
const sql = `delete from users where username='lisi';` // delete
con.query(sql, (err, data) => {
    if (err) {
        console.error(err)
        return 
    }
    console.log(data)
})

// 结束连接
con.end()