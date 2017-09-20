// rollup.config.js
import json from 'rollup-plugin-json'

export default {
  entry: './static/js/entry.js',
  output: {
    file: 'rollup_bundle_iife.js',
    format: 'iife',
  },
  plugins: [
    json()
  ]
}
