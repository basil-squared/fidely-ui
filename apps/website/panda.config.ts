import { defineConfig } from '@pandacss/dev'
import { fidelyPreset } from '@fidely-ui/panda-preset'
import neutral from '@fidely-ui/panda-preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    fidelyPreset({
      accentColor: neutral,
      grayColor: neutral,
      rounded: 'sm',
    }),
  ],
  preflight: true,
  include: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    '../patherns/src/examples/**/*.{js,jsx,ts,tsx}',
  ],
  importMap: '@fidely-ui/styled-system',
  outdir: 'styled-system',
  jsxFramework: 'react',
  staticCss: {
    recipes: '*',
  },
  theme: {
    extend: {},
  },

  globalCss: {
    extend: {
      'pre.shiki': {
        padding: '15px',
        overflow: 'auto',
        marginTop: '1.2rem',
        marginBottom: '1.5rem',
        borderRadius: '0.5rem',
      },

      'pre.shiki > code': {
        overflow: 'auto',
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: '0.9rem',
        lineHeight: '1.6',
      },

      '.doc-container': {
        paddingTop: '2rem',
      },

      '.doc-container a:hover': {
        textDecoration: 'underline',
      },
    },
  },
})
