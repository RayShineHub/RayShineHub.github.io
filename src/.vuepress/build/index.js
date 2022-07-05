const config = {
  // 开发环境
  development: {
    baseImgUrl: 'http://source.rayshine.site/blog'
  },
  // 生产环境
  production: {
    // baseImgUrl: "https://blog.rayshine.site/source/blog"
    baseImgUrl: 'https://cdn.rayshine.site/blog'
  }
}


module.exports = config[process.env.NODE_ENV]