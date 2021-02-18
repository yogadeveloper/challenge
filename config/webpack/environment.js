const { environment } = require('@rails/webpacker')
const path = require('path');

environment.config.merge({
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Helpers: path.resolve('./app/javascript/app/helpers'),
      Components: path.resolve('./app/javascript/app/components'),
      Styles: path.resolve('./app/javascript/app/styles'),
      Shared: path.resolve('./app/javascript/app/components/shared'),
      Icons: path.resolve('./app/javascript/app/assets/icons')
    }
  }
})

module.exports = environment
