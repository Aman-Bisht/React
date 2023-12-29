export function Other(){
    return "Entry point in Webpack"
}

/* Here i also change the file name of default file like in src folder
index.js => App.js
and in dist we change the name of main.js => Output.js
By simply change in the webpack.json.js file
entry:"./src/App.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"Output.js"
    }

*/