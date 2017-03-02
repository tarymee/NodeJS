var EventEmitter=require('events').EventEmitter
var life=new EventEmitter()    //实例化一个事件模型
life.setMaxListeners(11)  //设置最大的监听数

//1.这里也可以用addListener来监听事件
life.on('ask',function (who) {   //监听事件
	console.log(who+'想问问题')
})

/*用addListener来监听事件
//life.addListener('ask', function (who) {
	console.log(who+'想问问题')
});
*/


//2.传函数的形式监听事件
function water(){
   console.log('倒水')
}
life.on('water',water)


//移除事件
life.removeListener('water',water)   //移除某个事件下的一个监听器
life.removeAllListeners('water')     //移除某个事件下的所有监听器
life.removeAllListeners()     //移除所有事件

//获得某个事件监听的函数数量
console.log(life.listeners('ask').length)    //第1种方法
console.log(EventEmitter.listenerCount('life','ask'))  //第2种方法

life.emit('ask','zls')   //触发事件,如果事先未先监听事件，则返回false，否则为true