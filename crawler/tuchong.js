const path = require('path')
const fs = require('fs')
const superagent = require('superagent')

// 检测有没有img文件夹 没有的话创建一个
// const imgDir = path.resolve(__dirname, 'img')
// if (!fs.existsSync(imgDir)) {
//     fs.mkdirSync(imgDir)
// }





const tuchongConfig = {
    common: 'https://tuchong.com/rest/tags/',
    list: [{
        title: '人像',
        url: 'https://tuchong.com/rest/tags/' + encodeURIComponent('人像') + '/posts?page=1&count=10&order=weekly'
    }, {
        title: '儿童',
        url: 'https://tuchong.com/rest/tags/' + encodeURIComponent('儿童') + '/posts?page=1&count=10&order=weekly'
    }]
}


// 检测创建多级文件夹
function mkdirsSync(dirpath, mode) {
    try {
        if (!fs.existsSync(dirpath)) {
            let pathtmp
            //这里指用/ 或\ 都可以分隔目录  如  linux的/usr/local/services   和windows的 d:\temp\aaaa
            dirpath.split(/[/\\]/).forEach(function(dirname) {
                if (pathtmp) {
                    pathtmp = path.join(pathtmp, dirname);
                } else {
                    pathtmp = dirname
                }
                if (!fs.existsSync(pathtmp)) {
                    if (!fs.mkdirSync(pathtmp, mode)) {
                        return false
                    }
                }
            })
        }
        return true
    } catch (e) {
        console.log('create director fail! path=' + dirpath + ' errorMsg:' + e)
        return false
    }
}
mkdirsSync(path.resolve(__dirname, './img/tuchong'))


/**
 * 加载页面或者接口
 * @param  {String} url [加载的接口]
 * @return {[Promise]}     [Promise]
 */
let getData = function(url) {
    return new Promise((resolve, reject) => {
        superagent('GET', url)
            .end((err, res) => {
                if (err) reject(err)
                resolve(res)
            })
    })
}


/**
 * 加载并保存图片
 * @param  {[String]} src      [图片下载地址]
 * @return {[Promise]}     [Promise]
 */
let loadImg = function(src) {
    return new Promise((resolve, reject) => {
        superagent('GET', src)
            .end((err, res) => {
                if (err) reject(err)
                resolve(res)
            })
    })
}

var loadData = function (data) {
    getData(data.url).then(res => {
        console.log(`Loadding ${data.title} Column`)
        // 处理数据
        let postList = res.body.postList
        let picArr = []
        postList.map(item => {
            if (item.type === 'multi-photo') {
                item.images.forEach((item, i) => {
                    item.src = 'https://photo.tuchong.com/' + item.user_id + '/f/' + item.img_id + '.jpg'
                    item.src1 = 'https://photo.tuchong.com/' + item.user_id + '/l/' + item.img_id + '.jpg'
                    item.src2 = 'https://photo.tuchong.com/' + item.user_id + '/s/' + item.img_id + '.jpg'
                    item.src3 = 'https://photo.tuchong.com/' + item.user_id + '/g/' + item.img_id + '.jpg'
                })
                picArr.push({
                    post_id: item.post_id,
                    title: item.title,
                    url: item.url,
                    images: item.images
                })
            }
        })

        let dirString = './img/tuchong/' + data.title + '/'
        let dirResolve = path.resolve(__dirname, dirString)

        // 创建文件夹
        mkdirsSync(dirResolve)

        // 存入json
        fs.writeFileSync(path.resolve(dirResolve, data.title + '.json'), JSON.stringify(picArr))

        // 循环load图片
        picArr.forEach((item, i) => {
            console.log('Want To Load ' + item.post_id + ' Group')
            let postPath = path.resolve(dirResolve, item.post_id)
            mkdirsSync(postPath)
            item.images.forEach((item2, i) => {
                if (fs.existsSync(path.resolve(postPath, item2.img_id + '.jpg'))) {
                    console.log(`Had Download: ${item2.src}`)
                } else {
                    loadImg(item2.src).then((res) => {
                        fs.writeFileSync(path.resolve(postPath, item2.img_id + '.jpg'), res.body)
                        console.log(`Success: ${item2.src}`)
                    }).catch((err) => {
                        console.log(`Fail: ${item2.src}`)
                    })
                }

            })
        })

    })
}



var start = async function () {
    loadData(tuchongConfig.list[0])
    loadData(tuchongConfig.list[1])
}

start()