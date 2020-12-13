// vue.config.js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      // List native deps here if they don't work
      externals: ['native'],
    }
  }
}

