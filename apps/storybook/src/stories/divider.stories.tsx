import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Divider',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { DividerBasic as Basics } from 'patherns/examples/divider/divider-basic'
export { DividerColor as Color } from 'patherns/examples/divider/divider-color'
export { DividerHorizontal as Horizontal } from 'patherns/examples/divider/divider-horizontal'
export { DividerVertical as Vertical } from 'patherns/examples/divider/divider-vertical'
