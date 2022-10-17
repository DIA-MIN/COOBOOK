const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
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
