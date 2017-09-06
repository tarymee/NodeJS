async function remoteCall() {
    // do something
}

list = [];  // 假设是很多数据


async function process() {
    // 这种写法必须要一个 remoteCall 完成之后才进行另一个
    for (let i = 0; i < list.length; i++) {
        await remoteCall();
    }

    doAfter();
}

async function process2() {
    // 这种写法没法 await
    list.forEach(function(t) {
        remoteCall();
    });
}

async function process3() {
    // 这种写法 doAfter 一早就会执行
    list.forEach(async function(t) {
        await remoteCall();
    });

    // 它可能会在 remoteCall() 之前
    doAfter();
}

async function process4() {
    // 这种写法必须要全部 remoteCall 成功才能进行到 doAfter
    // remoteCall返回的 promise 如果 reject 会抛异常
    var promises = list.map(t => remoteCall());
    await Promise.all(promises);
    doAfter();
}