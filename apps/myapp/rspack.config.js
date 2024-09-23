const { createConfig } = require('@ng-rspack/build');

module.exports = () => createConfig({
  root: __dirname,
  name: 'myapp',
  main: './src/main.ts',
  index: './src/index.html',
  tsConfig: './tsconfig.app.json',
  outputPath: '../../dist/apps/myapp',
  styles: ['./src/styles.css'],
  assets: ['./public'],
  polyfills: ['zone.js']
});
