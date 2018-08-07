var path = require("path");

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + "/app",
        filename: 'bundle.js',
        publicPath: "/app/"
    },
    mode: 'development',
    module: {
        rules: [{
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ["env", "react", "stage-2"]
                }
            }]
        }]
    }
};

module.exports = config;

// var webpack = require('webpack')
// var path = require('path');

// var DIST_DIR = path.resolve(__dirname, 'dist');
// var SRC_DIR = path.resolve(__dirname, 'src');

// var config = {
//     entry: SRC_DIR + "/app/index.js",
//     output: {
//         path: DIST_DIR + "/app",
//         filename: "bundle.js",
//         publicPath: "/app/"
//     },
//     mode: 'development',
    
//     module: { 
//         rules: [ 
//             { 
//                 use: [ 
//                     {   
                        
//                         loader: "babel-loader", 
//                         query: { 
//                             presets: ["env", "react", "stage-2"]
//                         } } ] } ] }
// };

// module.exports = config;