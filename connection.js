// 引入mysql模块
const mysql = require('mysql')
// 创建连接对象
const c = mysql.createConnection({
	host: '127.0.0.1',
	port: '3306',
	user: 'root',
	password: '',
	database: 'user',
	multipleStatements: true //开启一次执行多个SQL命令
})
// 暴露连接对象
module.exports = c