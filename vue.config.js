const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/COOBOOK/',
  outputDir: 'dist',
  lintOnSave: false,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/_variabled.scss";
          `
      }
    }
  }
})
