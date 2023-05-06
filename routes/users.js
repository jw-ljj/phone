var express = require('express');
var router = express.Router();
var c = require('../connection')

/* GET users listing. */
router.get('/log', function(req, res, next) {
	//  res.send({
	// 	code:200,
	// 	msg:"success"
	// });
	// console.log(req.query);
	c.query(`select * from log_reg where uname=? `,[req.query.uname], (err, r)=> {
		if (err) {
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send(r)
		
	})
});

router.post('/reg', function(req, res, next) {
	//  res.send({
	// 	code:200,
	// 	msg:"success"
	// });
	console.log(req.body);
	c.query(`insert into log_reg set ?`,[req.body], (err, r)=> {
		if (err) {
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send({code :200,msg:"注册成功"})
		
	})
});

router.post('/creg', function(req, res, next) {
	//  res.send({
	// 	code:200,
	// 	msg:"success"
	// });
	// console.log(req.body.uname);
	var s=req.body.uname+"_info"
	c.query(`create table ${s}(
 iid int primary key auto_increment,
 uname char(10) unique not null,
 sex boolean,
 age int not null,
 email char(20),
 phone char(11)
 )
`,(err, r)=> {
		if (err) {
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send({code :200,msg:"注册成功"})
		
	})
});

module.exports = router;


