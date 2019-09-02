const fs = require('fs')
const path = require('path')

// 回调地狱
const getFileContent = (filename, callback) => {
    const fullFileName = path.resolve(__dirname, 'file',filename)
    fs.readFile(fullFileName, (err, data) => {
        if (err) {
            console.error(err)
        } else {
            callback(JSON.parse(data.toString()))
        }
    })
}
getFileContent('a.json', aData => {
    console.log('aData:', aData)
    getFileContent(aData.next, bData => {
        console.log('bData:', bData)
        getFileContent(bData.next, cData => {
            console.log('cData', cData)
        })
    })
})

// promise
/* const getFileContent = (filename) => {
    const fullFileName = path.resolve(__dirname, 'file', filename)
    const promise = new Promise((resolve, reject) => {
        fs.readFile(fullFileName, (err, data) => {
            if (err) {
                reject(err)
                return
            } else {
                resolve(JSON.parse(data.toString()))
                return
            }
        })
    })
    return promise
}
getFileContent('a.json').then(aData => {
    console.log('aData:', aData)
    return getFileContent(aData.next)
}).then(bData => {
    console.log('bData:', bData)
    return getFileContent(bData.next)
}).then(cData => {
    console.log('cData:', cData)
}) */
