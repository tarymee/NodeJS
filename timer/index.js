process.nextTick(function(){
    console.log("nextTick延迟");
});
setImmediate(function(){
     console.log("setImmediate延迟");
 });
console.log("正常执行");
// 结果：
//正常执行
//nextTick延迟
//setImmediate延迟

/*  原理解析
nextTick()的回调函数执行的优先级要高于setImmediate();
process.nextTick()属于idle观察者,setImmediate()属于check观察者.在每一轮循环检查中,idle观察者
先于I/O观察者,I/O观察者先于check观察者.

在具体实现上,process.nextTick()的回调函数保存在一个数组中,
setImmediate()的结果则是保存在链表中.
在行为上,process.nextTick()在每轮循环中会将数组中的回调函数全部执行完.
而setImmediate()在每轮循环中执行链表中的一个回调函数.
*/


