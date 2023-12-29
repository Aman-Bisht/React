const path = require("path");
module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    devServer:{
        static:path.join(__dirname,"dist"),
        compress:true,
        port:2000,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader",
                ]
            }
        ]
    },
 

}