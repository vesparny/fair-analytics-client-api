import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const minify = !!process.env.MINIFY

export default {
  entry: 'index.js',
  moduleName: 'fairAnalytics',
  useStrict: false,
  sourceMap: minify,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ]
      ]
    }),
    minify ? uglify() : {}
  ],
  targets: minify
    ? [
      {
        dest: 'dist/fair-analytics-client-api.umd.min.js',
        format: 'umd'
      },
      {
        dest: 'dist/fair-analytics-client-api.cjs.min.js',
        format: 'cjs'
      }
    ]
    : [
      {
        dest: 'dist/fair-analytics-client-api.cjs.js',
        format: 'cjs'
      },
      {
        dest: 'dist/fair-analytics-client-api.es.js',
        format: 'es'
      },
      {
        dest: 'dist/fair-analytics-client-api.umd.js',
        format: 'umd'
      }
    ]
}
