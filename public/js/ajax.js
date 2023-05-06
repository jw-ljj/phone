// const { base } = require("acorn-walk")

var baseURL='http://127.0.0.1:3000'


// 发送GET/DELETE请求
function get(type,url,obj,cb) {
	// 处理传递的参数，转为查询字符串格式
	var arr = []
	for(var k in obj) {
		arr.push(k + '=' + obj[k])
	}
	var str = arr.join('&')
	// console.log(str)
	// 发送AJAX请求
	// 1.创建HTTP请求对象
	var xhr = new XMLHttpRequest()
	// 2.打开服务器连接，设置请求接口，拼接参数
	xhr.open(type,baseURL+url+'?'+str)
	// 3.发送请求
	xhr.send()
	// 4.绑定事件，监听服务器端响应
	xhr.onload = function() {
		// 将响应的JSON转为JS，通过回调函数传递出去
		cb( JSON.parse(xhr.responseText) )
	}
}
// 发送POST/PUT请求
function post(type,url,obj,cb) {
	// 将传递的接口所需参数转换成查询字符串格式
	// a=1&b=2&c=3
	// 准备空数组
	var arr = []
	// 遍历对象
	for(var k in obj) {
		arr.push(k + '=' +obj[k])
	}
	// 把数组转为字符串，之间用&分割
	var str = arr.join('&')
	console.log(str)
	// 发送AJAX请求
	// 1.创建HTTP请求对象
	var xhr = new XMLHttpRequest()
	// 2.打开服务器连接，设置请求的接口
	xhr.open(type,baseURL+url)
	// 3.发送请求
	// 设置请求头中参数格式
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
	// 将参数放入到请求体
	xhr.send(str)
	// 4.绑定事件，监听服务器端响应
	xhr.onload = function() {
		// 调用传递进来的函数，将响应的文本传递的外部
		cb( JSON.parse(xhr.responseText) )
	}
	
}
