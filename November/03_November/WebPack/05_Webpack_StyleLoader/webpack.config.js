const path = require("path")
module.exports ={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    //Loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },

    //Loader


    devServer:{
        static:path.join(__dirname,"dist"),
        compress:true,
        port:3500,
    }
}