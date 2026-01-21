import { defineConfig } from 'tsup'

import rootConfig from '../../tsup.config'

export default defineConfig({
  ...rootConfig,
  entry: [
    'src/index.ts',
    'src/colors/**.ts',
    'src/utils/**/index.ts',
    'src/anatomy/**/index.ts',
  ],
  external: ['@pandacss/dev'],
})
