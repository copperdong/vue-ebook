module.exports = {
  //  设置打包后的css js引入路径  生产环境 为./  其他环境为/
  publicPath: process.env.NODE_ENV === 'production' ?  './' : '/'
}