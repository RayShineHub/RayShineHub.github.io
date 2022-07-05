const config = {
  // 开发环境
  development: {
    sourceUrl: 'http://source.rayshine.site/blog'
  },
  // 生产环境
  production: {
    // sourceUrl: "https://blog.rayshine.site/source/blog"
    sourceUrl: 'https://cdn.rayshine.site/blog'
  }
}


module.exports = config[process.env.NODE_ENV]