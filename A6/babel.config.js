const plugins = process.env.NODE_ENV === 'development' ? [] : ['transform-remove-console']
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // NOTE: 移除console
  plugins: plugins
}
