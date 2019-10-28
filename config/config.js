import LodashWebpackPlugin from 'lodash-webpack-plugin';

const chainWebpack = config => {
  config.plugin('lodash').use(LodashWebpackPlugin, [
    {
      collections: true,
      paths: true,
    },
  ]);
};

// https://umijs.org/plugin/umi-plugin-react.html
const plugins = [
  [
    'umi-plugin-react',
    {
      dva: false,
      antd: true,
      routes: {
        exclude: [/stores\//], // pages 下的 stores 排除
        // update: () => {},
      },
      locale: {
        default: 'zh-CN',
        baseNavigator: false,
        antd: true,
        baseSeparator: '-',
      },
      library: 'react',
      dynamicImport: {
        // webpackChunkName: true,
        loadingComponent: './components/PageLoading/index.jsx',
        // level: ,
      },
      // dll: {
      //   include: [],
      //   exclude: [],
      // },
      // pwa: {
      //   manifestOptions: {
      //     srcPath: 'src/manifest.json',
      //   },
      //   workboxPluginMode: 'GenerateSW', // 'InjectManifest'
      //   workboxOptions: {
      //     swSrc: 'src/manifest.json',
      //     swDest: 'service-worker.js',
      //     importWorkboxFrom: 'local',
      //   }
      // },
      hd: true,
      fastClick: false,
      title: {
        defaultTitle: 'ANTD MOBILE',
        // format: '{parent}{separator}{current}',
        // separator: ' - ',
        useLocale: true,
      },
      // chunks: ['umi'],
      // scripts: [{}, ''],
      // headScripts: [{}, ''],
      // metas: [{}],
      // links: [{}],
    },
  ],
  [
    'umi-plugin-mobx-state-tree',
    {
      exclude: [/^\$/], // 这里是以$开头的stores不会被引用
    },
  ],
];

const define = {
  'process.env.NODE_ENV': process.env.NODE_ENV,
  'process.env.UMI_ENV': process.env.UMI_ENV,
};

// https://umijs.org/config/
export default {
  plugins,
  // routes: [],
  // disableRedirectHoist: false,
  history: 'browser', // browser、hash、memory
  outputPath: './dist',
  // base: '/',
  // publicPath: '/',
  runtimePublicPath: false,
  // cssPublicPath: '/',
  mountElementId: 'root',
  minimizer: 'terserjs', // uglifyjs, terserjs
  hash: true,
  targets: { android: 4, ios: 6 },
  // context: {},
  // exportStatic: { htmlSuffix: false, dynamicRoot: false },
  // singular: false,
  // mock: {
  //   exclude: [],
  // },
  // block: {
  //   defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  // },
  ssr: false,

  chainWebpack,
  theme: {
    // https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
    '@brand-primary': '#0078ff',
  },
  treeShaking: true,
  define,
  // externals: {},
  // alias: {},
  // devServer: {},
  // devtool: {},
  // disableCSSModules: false,
  // disableCSSSourceMap: false,
  // extraBabelPresets: [],
  extraBabelPlugins: ['lodash'],
  // extraBabelIncludes: [],
  // extraPostCSSPlugins: [],
  // cssModulesExcludes: [],
  // generateCssModulesTypings: true,
  // copy: [],
  // proxy: {},
  // sass: {},
  ignoreMomentLocale: true,
  // lessLoaderOptions: {},
  // cssLoaderOptions: {},
  // autoprefixer: { browsers: DEFAULT_BROWSERS, flexbox: true },
  // uglifyJSOptions: {},
};
