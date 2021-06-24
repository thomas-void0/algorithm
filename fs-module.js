const fs = require("fs")

require("chokidar").watch('.', {
    ignored: ["./dist","./.git","./node_modules",/(^|[\/\\])\../], // ignore dotfiles
    persistent: true
}).on('raw', (event, path, details) => {

    const urlList = path.split("/")
    const tagIdx = urlList.indexOf("algorithm")
    const len = urlList.length
    const isOperation = tagIdx === len - 3 && urlList.lastIndexOf("index.ts") === len - 1

    //创建
    if (event === "created" && details.type === "file") {
        if (!isOperation) return
        
        fs.readFile("./README.md", function (err, file) {
            if (err) throw err

            let str = file.toString()
            //以标题分模块
            const strList = file.toString().split("##")
            //找到最后一个模块，求其当前长度
            const num = strList[strList.length - 1]
                .split("\n")
                .length
            //设置标题
            const name = urlList[len - 2]

            str += `\n${num}. [《${name}》](https://github.com/lmxyjy/algorithm/blob/main/${name}/${urlList[len - 1]})`
            fs.writeFile("./README.md", str, 'utf-8', function (err) {
                if (err) throw err
                console.log("文件写入成功")
            })
        })
    }

    //删除
    if (event === "moved") {
        // if (!isOperation) return
        // fs.readFile("./README.md", function (err, file) {
        //     if (err) throw err

        //     let str = file.toString()
        //     //以标题分模块
        //     const strList = file.toString().split("##")
        //     const config = strList.find(item => item.includes(`${name}/${urlList[len - 1]}`)
        //     config.  

        //     str += `\n${num}. [《${name}》](https://github.com/lmxyjy/algorithm/blob/main/${name}/${urlList[len - 1]})`
        //     fs.writeFile("./README.md", str, 'utf-8', function (err) {
        //         if (err) throw err
        //         console.log("文件写入成功")
        //     })
        // })
    }
}).on("ready", () => {
    console.log("开始监听文件改动了...")
})
