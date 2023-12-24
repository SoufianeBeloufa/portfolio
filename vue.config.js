const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist', 
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/dist/' : '/',
})