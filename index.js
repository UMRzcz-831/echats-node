let requests = require('requests')
let fs = require('fs')
const path = require('path')
const cheerio =require('cheerio')


requests('https://ncov.dxy.cn/ncovh5/view/pneumonia')
.on('data',(chunk)=>{
    // console.log(chunk)
    let window = {}
    const $ = cheerio.load(chunk)
    eval($('#getAreaStat').html())
    let filePath =path.resolve(__dirname,'data.json')
    let dataStr =JSON.stringify(window.getAreaStat)
    fs.writeFile(filePath,dataStr,()=>{
        console.log('success')
    })
})