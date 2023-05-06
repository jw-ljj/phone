var express = require('express');
var router = express.Router();
var c = require('../connection')

/* GET users listing. */
// router.get('/search', function(req, res, next) {
// 	console.log(req.query.uname);
// 	c.query(`select * from info where uname=? `,[req.query.uname], (err, r)=> {
// 		if (err) {
// 			return next(err)
// 		} 
// 		// console.log("连接数据库成功");
// 		res.send(r)
		
// 	})
// });

// router.get('', function(req, res, next) {
// 	console.log(req.params);
// 	c.param(`select * from info where uname=? `,[req.query.uname], (err, r)=> {
// 		if (err) {
// 			return next(err)
// 		} 
// 		// console.log("连接数据库成功");
// 		res.send(r)
		
// 	})
// });


router.get('/search', function(req, res, next) {
		console.log(req.query.yema);
		// if(req.query.yema=="undefined"){
		// 	req.query.yema=0
			
		// }
		
	var s="%"+ req.query.uname+"%"
	c.query(`select * from info where uname like ? limit ${(req.query.yema-1)*req.query.count=="undefined"?0:(req.query.yema-1)*req.query.count},${req.query.count};select count(*) as total from info`,[s], (err, r)=> {
		if (err) {
			// console.log(req.query.uname);
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send(r)
		
	})
});

router.get('/searchm', function(req, res, next) {
	// console.log(req.query);
	var ss1="%"+req.query.look+"%"
	var ss2="%"+req.query.look+"%"
	
	// var ss3="%"+req.query.look+"%"

	// var s2=req.query.phone
	// ss=="男"?1:0
	// console.log(s);
	
	//  or sex like ?
	//  ,ss3=="%男%"?1:0
	c.query(`select * from info where uname like ?  or phone like ? limit ${(req.query.yema-1)*req.query.count=="undefined"?0:(req.query.yema-1)*req.query.count},${req.query.count};select count(*) as total from info where uname like ?  or phone like ? limit ${(req.query.yema-1)*req.query.count=="undefined"?0:(req.query.yema-1)*req.query.count},${req.query.count}`,[ss1,ss2,ss1,ss2], (err, r)=> {
		if (err) {
			// console.log(req.query.uname);
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send(r)
		
	})
});

router.get('/searchi', function(req, res, next) {
	// console.log(req.query);
	// var s="%"+ req.query.uname+"%"
	c.query(`select * from info where iid= ? `,[req.query.iid], (err, r)=> {
		if (err) {
			// console.log(req.query.uname);
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send(r)
		
	})
});


router.put('/update', function(req, res, next) {
	console.log(req.body.prename);
	var req_body=req.body
	delete req_body.prename
	delete req_body.uname
	console.log(req_body);
	
	c.query(`update info set ? where iid='${req.body.iid}'`,[req_body], (err, r)=> {
		if (err) {
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send({code :200,msg:"修改成功"})
		
	})
});

router.delete('/delete', function(req, res, next) {
	// console.log(req);
	c.query(`delete from info where iid=? `,[req.query.iid], (err, r)=> {
		if (err) {
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send({code :200,msg:"删除成功"})
		
	})
});

router.post('/add', function(req, res, next) {

	console.log(req.body);
	c.query(`insert into info set ?`,[req.body], (err, r)=> {
		if (err) {
			return next(err)
		} 
		// console.log("连接数据库成功");
		res.send({code :200,msg:"添加成功"})
		
	})
});



module.exports = router;


