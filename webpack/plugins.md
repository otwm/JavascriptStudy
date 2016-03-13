## 플러그인 사용하기

## 빌트인 
    
    var webpack = require("webpack");
    
    module.exports = {
        plugins: [
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin([
                "bower.json",["main"]
            )
            ],
            ['normal','loader'])
        ]
    }
    
## 디폴트

    //설치
    npm install component-webpack-plugin
    
    //설정
    var ComponentPlugin = require("component-webpack-plugin");
    module.exports = {
        plugins: [
            new ComponentPlugin();
        ]
    }