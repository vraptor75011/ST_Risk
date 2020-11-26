
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as path from 'path';
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import * as nodeExternals from 'webpack-node-externals';
import commonBackEndConfig from './webpack.back.common';

const productionBackEndConfig:Configuration = merge<Configuration>(commonBackEndConfig,
  {
    mode: 'production',
    devtool: 'source-map',
    entry: {
      backend: path.join(__dirname, '/../../src/index.ts'),
    },
    externals: [
      nodeExternals({
      })
  
    ],
    plugins: [
      new CleanWebpackPlugin(),
      ]
  
      
  /* We'll add stuff here :) */
  }

  

);

export default productionBackEndConfig
