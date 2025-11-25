import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Stack',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { StackBasic as Basics } from 'patherns/examples/stack/stack-basic'
export { StackHstack as HStack } from 'patherns/examples/stack/stack-hstack'
