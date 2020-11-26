
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as path from 'path';
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import { merge } from "webpack-merge";
import * as nodeExternals from 'webpack-node-externals';
import commonBackEndConfig from './webpack.back.common';

const developmentBackEndConfig:Configuration = merge<Configuration>(commonBackEndConfig,
  {
    mode: 'development',
    cache: false,
    watch: true,
    devtool: 'inline-source-map',
    entry: {
      backend: path.join(__dirname, '/../../src/index.ts'),
    },
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?1000'],
      })
  
    ],
    plugins: [
      new CleanWebpackPlugin(),
      new HotModuleReplacementPlugin()
      ]
  
      
  /* We'll add stuff here :) */
  }

  

);

export default developmentBackEndConfig
