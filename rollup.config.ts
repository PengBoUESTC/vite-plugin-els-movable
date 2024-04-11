import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import clear from 'rollup-plugin-clear'

export default defineConfig({
  input: ['lib/index.ts', 'lib/script.ts',],
  external: ['vite'],
  output: {
    dir: 'dist',
    format: 'es',
    chunkFileNames: '[name].js'
  },

  plugins: [
    nodeResolve(),
    clear({ targets: ['dist'] }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
  ]
})