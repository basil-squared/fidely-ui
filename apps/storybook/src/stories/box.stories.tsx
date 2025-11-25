import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Box',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { BoxBasic as Basics } from 'patherns/examples/box/box-basic'
export { BoxAsChild as AsChild } from 'patherns/examples/box/box-as-child'
