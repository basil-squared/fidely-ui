import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Marquee',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { MarqueeBasics as Basics } from 'patherns/examples/marquee/marquee-basics'
export { MarqueeAutofill as Autofill } from 'patherns/examples/marquee/marquee-autofill'
export { MarqueeEdge as Edge } from 'patherns/examples/marquee/marquee-edge'
export { MarqueePause as Pause } from 'patherns/examples/marquee/marquee-pause'
export { MarqueeReverse as Reverse } from 'patherns/examples/marquee/marquee-reverse'
export { MarqueeSpeed as Speed } from 'patherns/examples/marquee/marquee-speed'
export { MarqueeVertical as Vertical } from 'patherns/examples/marquee/marquee-vertical'
