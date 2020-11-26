module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'BE|MOVIN'
      args[0].description = 'Спортна зала за любители и професионални атлети.'
      return args
    })
  }
}
