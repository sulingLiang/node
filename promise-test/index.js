const fs = require('fs')
const path = require('path')

const getFileContent = (filename) => {
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
})