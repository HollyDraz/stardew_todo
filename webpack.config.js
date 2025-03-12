const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // DevServer configuration
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8083, // Port for the dev server
    hot: true,  // Enable Hot Module Replacement (HMR)
  },

  // Module rules for processing files
  module: {
    rules: [
      // JavaScript files (with Babel)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // CSS files (with style-loader and css-loader)
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Plugins to customize the build
  plugins: [
    // HTML Webpack Plugin to generate the index.html file
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
  ],

  // Resolve extensions
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
