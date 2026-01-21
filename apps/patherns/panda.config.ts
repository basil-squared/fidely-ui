import { defineConfig } from '@pandacss/dev'
import { fidelyPreset } from '@fidely-ui/panda-preset'

export default defineConfig({
  presets: [fidelyPreset()],
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations

  // Files to exclude
  exclude: [],

  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@fidely-ui/react/**/*.{ts,tsx,js,jsx}',
  ],

  // The output directory for your css system
  outdir: 'styled-system',
  staticCss: {
    recipes: '*',
  },
  theme: {
    extend: {},
  },

  jsxFramework: 'react',
})
