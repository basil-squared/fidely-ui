import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Flex',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { FlexBasic as Basics } from 'patherns/examples/flex/flex-basic'
export { FlexBetween as Height } from 'patherns/examples/flex/flex-between'
export { FlexAround as Around } from 'patherns/examples/flex/flex-around'
export { FlexInlineBlock as InlineBlock } from 'patherns/examples/flex/flex-inline-block'
export { FlexInlineFlex as InlineFlex } from 'patherns/examples/flex/flex-inline-flex'
