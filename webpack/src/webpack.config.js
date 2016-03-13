/**
 * Created by kdo on 16. 2. 21.
 */
module.exports = {
    'entry': './entry.js'
    , output: {
        path: __dirname
        , filename: 'bundle.js'
    }
    , module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
}
