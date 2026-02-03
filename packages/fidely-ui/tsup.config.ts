import { defineConfig } from 'tsup'

import rootConfig from '../../tsup.config'

export default defineConfig({
  ...rootConfig,
  entry: [
    'src/index.ts',
    'src/collection.ts',
    'src/components/**/index.ts',
    'src/anatomy.ts',
  ],
  external: [
    'react',
    'react-dom',
    '@pandacss/dev',
    '@fidely-ui/panda-preset',
    /^styled-system\/.+$/,
    '@ark-ui/react',
  ],
})
