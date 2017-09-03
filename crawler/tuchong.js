const path = require('path')
const fs = require('fs')
const superagent = require('superagent')

// 检测有没有img文件夹 没有的话创建一个
// const imgDir = path.resolve(__dirname, 'img')
// if (!fs.existsSync(imgDir)) {
//     fs.mkdirSync(imgDir)
// }


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


// 加载接口
getData('https://tuchong.com/rest/tags/' + encodeURIComponent('儿童') + '/posts?page=1&count=20&order=weekly&before_timestamp=').then(res => {
    // 处理数据
    let postList = res.body.postList
    let picArr = []
    postList.map(item => {
        if (item.type === 'multi-photo') {
            item.images.forEach((item, i) => {
                item.id = item.img_id
                item.src = 'https://photo.tuchong.com/' + item.user_id + '/g/' + item.img_id + '.jpg'
            })
            picArr.push({
                post_id: item.post_id,
                images: item.images
            })
        }
    })

    // 循环load图片
    picArr.forEach((item, i) => {
        console.log('将要下载' + item.post_id + '图片组')
        let postPath = path.resolve(__dirname, './img/tuchong/' + item.post_id)
        mkdirsSync(postPath)
        item.images.forEach((item2, i) => {
            loadImg(item2.src).then((res) => {
                fs.writeFileSync(path.resolve(postPath, item2.id + '.jpg'), res.body, null)
                console.log(`下载成功: ${item2.src}`)
            }).catch((err) => {
                console.log(`下载失败: ${item2.src}`)
            })
        })
    })

})