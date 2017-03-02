var student=require('./student.js')    //引入模块，使用require，返回那个模块
var teacher=require('./teacher.js')

//teacher.add('Scotter')   //执行teacher模块的add方法

function add(teacherName,students) {
	teacher.add(teacherName)
	students.forEach(function(item,index){//学生有很多个，用forEach遍历，item是每个具体项。index是索引
		student.add(item)
	})
}

exports.add=add
//module.exports=add    //这句和上面一句是一样的