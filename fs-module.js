const fs = require("fs")

//实现一个split方法，在原有split方法的基础上不省略进行切割的字符
function getSplitList(str, tag) {
    const result = []
    let prev = 0
    const len = str.length
    for (let i = 0; i < len; i++){
        if (str[i] === tag) {
            const item = str.substring(prev, i) + tag
            prev = i + 1
            result.push(item)
        } else if(i === len - 1) {
            result.push(str[i])
        }
    }

    return result
}

//写入文件
function wirteREADME(str,content) {
    fs.writeFile("./README.md", str, 'utf-8', function (err) {
        if (err) throw err
        console.log(content)
    })
}

require("chokidar").watch('./', {
    ignored: ["./dist","./.git","./node_modules",/(^|[\/\\])\../], // ignore dotfiles
    persistent: true
}).on('raw', (event, path, details) => {

    const urlList = path.split("/")
    const tagIdx = urlList.indexOf("algorithm")
    const len = urlList.length

    //创建
    if (event === "created" && details.type === "file") {
        const isOperation = tagIdx === len - 3 && urlList.lastIndexOf("index.ts") === len - 1
        if (!isOperation) return
        //读取README.md文件
        fs.readFile("./README.md", function (err, file) {
            if (err) throw err
          
            //将获取到的字符串文件内容以换行符切割，但是同时保留换行符号。以便后续拼接新的文本内容
            const strList = getSplitList(file.toString(), "\n")
            //获取到文件内容数组中最后一项的索引值
            let rightIdx = strList.length - 1
            //找到最后一行，如果它是空的或者就是只有一个单纯的换行，那么rightIndex指针左移动，获取到指针遇到的非空序列元素
            let lastRow = strList[rightIdx]
            while (lastRow === "\n" || !lastRow) {
                strList.splice(rightIdx,1)
                lastRow = strList[--rightIdx]
            }

            //将创建的文件夹名称作为标题
            const title = urlList[len - 2]
            //获取新序列元素的序号
            const num = +lastRow.split(".")[0] + 1
            //拼接序列元素模版
            let template = `${num}. [《${title}》](https://github.com/lmxyjy/algorithm/blob/main/${title}/${urlList[len - 1]})\n`
            //如果上一行有换行符，则本次不在头部拼接换行符
            if(!lastRow.includes("\n")) template = "\n" + template
            strList[strList.length] = template
            
            //重新写入
            wirteREADME(strList.join(""),`序列添加成功${template}`)
        })
    }

    //删除
    if (event === "moved") {
        const type = details.type
        const isOperation = (type === "directory" && tagIdx === len - 2) ||
            (type === "file" && tagIdx === len - 3 && urlList.lastIndexOf("index.ts") === len - 1)
        
        if (!isOperation) return
        fs.readFile("./README.md", function (err, file) {
            if (err) throw err

            //以换行分模块
            const strList = getSplitList(file.toString(), "\n")
            //找到需要删除的序列号
            const idx = strList.indexOf(strList.find(item => item.includes(urlList[len - 1])))
            if (idx === -1) return
            //删除此项
            strList.splice(idx, 1)
            
            //重新写入
            wirteREADME(strList.join(""),"序列删除成功")
        })
    }
}).on("ready", () => {
    console.log("开始监听文件改动了...")
})
