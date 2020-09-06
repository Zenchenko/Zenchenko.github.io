module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analitics: './src/analitics.js'
    },
    output:{
        filname: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}