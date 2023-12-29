const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    // mode:process.env.NODE_ENV ==="prodution"?"production":"development",
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:"/\.css$/i",
                use:["style-loader","css-loader"],
            },
            // {
            //     test:"/\.(js)$/ ",
            //     use:"babel-loader",
            // },
            {
                test: /\.js$/, // Match JavaScript files
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                  },
                },
              },
            // {
            //     test: "/\.js$/", // Match JavaScript files
            //     exclude: "/node_modules/",
            //     use: {
            //       loader: 'babel-loader',
            //       options: {
            //         presets: ['@babel/preset-env', '@babel/preset-react'],
            //       },
            //     },
            //   },
        ]
    },
    plugins:[new HtmlWebpackPlugin()],
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3000,
      },
}