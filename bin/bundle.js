import {build as esBuild} from 'esbuild'

await esBuild({
  bundle: true,
  entryPoints: ['./src/**/*.ts'],
  outdir: './dist/cli',
  platform: 'node',
  format: 'esm',
  external: [],
  loader: {'.node': 'copy'},
  splitting: true,
  plugins: [],
  treeShaking: false,
})
