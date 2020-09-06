const path = require("path")

module.exports = { 
    entry: './src/index.js',
    output: {
        filname: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}