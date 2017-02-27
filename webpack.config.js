const path = require('path')
const webpack = require('webpack')

function buildConfig(env) {
  return require('./config/' + env + '.js')({ env: env })
}

module.exports = buildConfig