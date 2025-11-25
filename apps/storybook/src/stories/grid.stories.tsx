import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Layout/Grid',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { GridBasic as Basics } from 'patherns/examples/grid/grid-basic'
export { GridMinWidth as MinWidth } from 'patherns/examples/grid/grid-min-width'
export { GridSpanColumns as SpanColumns } from 'patherns/examples/grid/grid-span-columns'
export { GridSpans as Spans } from 'patherns/examples/grid/grid-spans'
