module.exports = function(dev) {
	
	return {
		devtool:'cheap-module-source-map',
		output:{
			path:path.join(__dirname,'../dist/assets'),
			filename:'[name].bundle.js',
			publishPath:'./',
			sourceMapFilename:'[name].map'
		},
		devServer:{
			port:7777,
			host:'localhost',
			historyApiFallback:true,
			noInfo:false,
			stats:'minimal',
			publishPath:'./'
		}
	}
}