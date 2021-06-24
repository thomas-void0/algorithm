const fs = require("fs")

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

require("chokidar").watch('.', {
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
        
        fs.readFile("./README.md", function (err, file) {
            if (err) throw err

            let str = file.toString()
            //以换行区分模块
            const strList = getSplitList(str, "\n")
            let _len = strList.length - 1
            //找到最后一行，求其当前长度
            let lastRow = strList[_len]
            //找到最后一个非空序列
            while (lastRow === "\n" || !lastRow) {
                strList.splice(_len,1)
                lastRow = strList[--_len]
            }

            //设置标题
            const title = urlList[len - 2]
            const num = +lastRow.split(".")[0] + 1
            let template = `${num}. [《${title}》](https://github.com/lmxyjy/algorithm/blob/main/${title}/${urlList[len - 1]})`
            if(!lastRow.includes("\n")) template = "\n" + template
            strList[strList.length] = template
            
            const _str = strList.join("")
            
            fs.writeFile("./test.md", _str, 'utf-8', function (err) {
                if (err) throw err
                console.log("文件写入成功")
            })
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

            let str = file.toString()
            //以换行分模块
            console.log("str==>",str)
            const strList = getSplitList(str, "\n")
            console.log("hhhhh",strList)
            return
            const name = urlList[len - 2]
            //找到需要删除的序列号
            const idx = strList.indexOf(strList.find(item => item.includes(`${name}/${urlList[len - 1]}`)))
            if (idx === -1) return
            //置为空
            strList[idx] = null

            //拼接字符串

            str += `\n${num}. [《${name}》](https://github.com/lmxyjy/algorithm/blob/main/${name}/${urlList[len - 1]})`
            fs.writeFile("./README.md", str, 'utf-8', function (err) {
                if (err) throw err
                console.log("文件写入成功")
            })
        })
    }
}).on("ready", () => {
    console.log("开始监听文件改动了...")
})
