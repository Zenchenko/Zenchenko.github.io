module.expres = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.remove(__dirname, 'dist')
    }
}