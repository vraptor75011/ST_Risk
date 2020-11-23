
import * as CopyPlugin from 'copy-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const commonBackEndConfig: webpack.Configuration = {
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath:'/' // Useful ?
    },
    module: {
        rules: [
            {
                exclude: [path.resolve(__dirname, '../node_modules')],
                test: /\.ts$/,
                use: 'ts-loader',
              },
              {
                test: /\.graphql?$/,
                use: [
                  {
                    loader: 'webpack-graphql-loader',
                    options: {
                      //
                    },
                  },
                ],
              },        
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
      new CopyPlugin({
          patterns: [{ from: '.env', to: '.env', toType: 'file' }],
        })
    ]

    
/* We'll add stuff here :) */
}

export default commonBackEndConfig