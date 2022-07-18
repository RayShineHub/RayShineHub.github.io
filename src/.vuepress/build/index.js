const envConfig = {
  // 开发环境
  development: {
    sourceUrl: 'http://source.rayshine.site/blog',
    musicUrl: 'http://localhost:3000',
    algolia: false
    // algolia: {
    //   apiKey: '3ebf6ff353a168338d5b9221e99e3d11',
    //   indexName: 'rayshine',
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: '5KJPBBG282'
    // }
  },
  // 生产环境
  production: {
    // sourceUrl: "https://blog.rayshine.site/source/blog"
    sourceUrl: 'https://cdn.rayshine.site/blog',
    musicUrl: 'https://music.rayshine.site',
    algolia: {
      apiKey: '3ebf6ff353a168338d5b9221e99e3d11',
      indexName: 'rayshine',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: '5KJPBBG282'
    }
  }
}


module.exports = envConfig[process.env.NODE_ENV]