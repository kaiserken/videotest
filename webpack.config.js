const Path = require('path');

module.exports = {
  entry: [
    Path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path:        Path.resolve(__dirname, 'build/videotest'),
    publicPath:  'videotest',
    filename:    'videotest.js'
  },
  module: {
    loaders: [
      {
        exclude: [/node_modules/, /font/],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=font/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};


// module.exports = {
//   entry: {
//   "videotest.js":  Path.resolve(__dirname, 'src/index.js'),
//   "ps-video.js": [
//     Path.resolve(__dirname, 'node_modules/video.js/dist/video-js/video.dev.js'),
//     Path.resolve(__dirname, 'node_modules/videojs-chromecast/dist/videojs.chromecast.js'),
//     Path.resolve(__dirname, 'node_modules/videojs-youtube/src/youtube.js'),
//     Path.resolve(__dirname,'node_modules/videojs-levels/lib/videojs-levels.js')
//   ]
//  // "video-js.swf":  Path.resolve(__dirname, 'node_modules/videojs-swf/dist/video-js.swf')
//   },
//   output: {
//     path:        Path.resolve(__dirname, 'build/videotest'),
//     publicPath:  'videotest',
//     filename:    '[name]'
//   },
//   module: {
//     loaders: [
//       {
//         exclude: /node_modules/,
//         loader: 'babel'
//       },
//       {
//         test: /\.css$/,
//         loader: "style-loader!css-loader!autoprefixer-loader"
//       },
//       {
//         test: /\.less$/,
//         loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
//       },
//       {
//         test: /\.swf$/,
//         loader: "file-loader!node_modules/videojs-swf/dist/video-js.swf"
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   }
// };
