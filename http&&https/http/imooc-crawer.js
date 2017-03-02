var http=require('http')
var cheerio=require('cheerio')
var url='http://www.imooc.com/learn/348'

//解析HTML
function filterChapter(html){
	var $=cheerio.load(html)
	var chapters=$('.chapter')

	/*  得到这样的数据结构
	[{
		chapterTitle:'',
		videos:[
			title:'',
			id:''
		]
	}]
	*/
	var couseData=[]    //课程数据
	chapters.each(function(item){
		var chapter=$(this)   //单独拿到每一章
		var chapterTitle=chapter.find('strong').text()
		var videos=chapters.find('.video').children('li')
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		}

		videos.each(function(item){
			var video=$(this).find('.J-media-item')
			var videoTitle=video.text()
			var id=video.attr('href').split('video/')[1]
			chapterData.videos.push({
				title:videoTitle,
				id:id
			})

			couseData.push(chapterData)
		})
	})
	return couseData
}

//打印结果
function printCourseData(courseData){
	courseData.forEach(function(item){
		var chapterTitle=item.chapterTitle
		console.log(chapterTitle+'\n')

		item.videos.forEach(function(video){
			console.log('【'+video.id+'】'+video.title+'\n')
		})
	})
}

http.get(url,function (res) {
	var html=''
	res.on('data',function(data){
		html+=data
	})
	res.on('end',function(){
		var courseData=filterChapter(html)
		printCourseData(courseData)
	})
}).on('error',function(){
	console.log('获取数据课程错误')
})