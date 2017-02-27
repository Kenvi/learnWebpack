const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry:'./app/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	}
}