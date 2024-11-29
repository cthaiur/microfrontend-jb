const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  cache: false,
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true, // Garante navegação SPA
    headers: {
      'Access-Control-Allow-Origin': '*', // Permitir acesso de qualquer origem
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },    
  },
  output: {
    publicPath: 'auto', // Adiciona dinamicamente o caminho correto
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microfrontend',
      filename: 'remoteEntry.js',
      exposes: {
        //COMPONENTES BASE
        './NewsHeader': './src/components/news/NewsHeader.tsx',
        './NewsList': './src/components/news/NewsList.tsx',
        './AdCategoryHeader': './src/components/ads/AdCategoryHeader.tsx',
        './AdCard': './src/components/ads/AdCard.tsx',
        './SponsorSlider': './src/components/sponsors/SponsorSlider.tsx',
        './SponsorCard': './src/components/sponsors/SponsorCard.tsx',
        './WeatherCard': './src/components/weather/WeatherCard.tsx',
        './ForecastList': './src/components/weather/ForecastList.tsx',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
