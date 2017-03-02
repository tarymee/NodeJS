function add (student) {
	console.log('add student:'+student)
}

//通过exports对象来把add方法暴露出去，这个对象可以挂载很多东西，比如属性和方法
exports.add=add