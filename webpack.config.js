const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: {main:'./server/server.ts'},
  devtool:'inline-source-map',
  target:'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude:path.resolve(__dirname, "node_modules")
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [ nodeExternals() ]
};