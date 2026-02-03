import { defineConfig } from '@pandacss/dev'
import { fidelyPreset } from '@fidely-ui/panda-preset'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  presets: [fidelyPreset()],

  outdir: 'styled-system',
})
