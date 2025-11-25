import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Center',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { CenterBasic as Basics } from 'patherns/examples/center/center-basic'
export { CenterHeight as Height } from 'patherns/examples/center/center-height'
export { CenterInline as Inline } from 'patherns/examples/center/center-inline'
export { CenterWithImage as WithImage } from 'patherns/examples/center/center-with-image'
