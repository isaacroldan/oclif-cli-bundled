import {build as esBuild} from 'esbuild'

await esBuild({
  bundle: true,
  entryPoints: ['./src/**/*.ts'],
  outdir: './dist',
  external: [],
  format: 'esm',
  platform: 'node',
  loader: {'.node': 'copy'},
  plugins: [],
  splitting: true,
  inject: ['./bin/cjs-shims.js'],
  treeShaking: false,
})
