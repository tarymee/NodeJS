var mysql = require('mysql');

//创建数据库连接资源句柄
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'test',
	port: '3306',
	charset: 'utf8'
});
//连接
connection.connect();
// 插入
var usr = {
	name: 'zhangsan',
	password: 'pwdzhangsan',
	mail: 'zhangsan@gmail.com'
};
connection.query('insert into users set ?', usr, function(err, result) {
	if (err) throw err;
	console.log('inserted zhangsan'); // inserted zhangsan
	console.log('插入结果',result);

});



//查询
connection.query('select * from users', function(err, rows, fields) {
	if (err) throw err;

	console.log('selected after inserted');
	console.log('rows',rows);
	var usr;
	for (var i = 0; usr = rows[i];i++) {
		console.log('user name=' + usr.name + ', password=' + usr.password);
	}

	console.log('\n');
});



//更新
var update= {password: 'ppp'};
connection.query('update users set ? where name="zhangsan"',update, function(err, result) {
	if (err) throw err;

	console.log('updated zhangsan\'s password to ppp');
	console.log(result);
});


//删除
connection.query('delete from  users where name="zhangsan"', {
	password: 'ppp'
}, function(err, result) {
	if (err) throw err;

	console.log('deleted zhangsan');
	console.log(result);
	console.log('\n');
});


//终止
connection.end();
