import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Wrap',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { WrapBasic as Basics } from 'patherns/examples/wrap/wrap-basic'
export { WrapAlign as Align } from 'patherns/examples/wrap/wrap-align'
export { WrapGap as Gap } from 'patherns/examples/wrap/wrap-gap'
export { WrapJustify as Justify } from 'patherns/examples/wrap/wrap-justify'
export { WrapRowGap as RowGap } from 'patherns/examples/wrap/wrap-row-gap'
