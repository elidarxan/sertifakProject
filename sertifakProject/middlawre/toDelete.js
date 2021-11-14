const fs = require('fs')
const path = require('path')
const p = path.dirname(require.main.filename)
const moment = require('moment')

module.exports = (filePath) => {
    if (filePath) {
        fs.unlink(p + '/../public/images/' + filePath , (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
}