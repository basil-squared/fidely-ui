import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Overlays/HoverCard',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { HoverCardBasics as Basics } from 'patherns/examples/hover-card/hover-card-basics'
export { HoverCardControlled as Controlled } from 'patherns/examples/hover-card/hover-card-controlled'
export { HoverCardDelay as Delay } from 'patherns/examples/hover-card/hover-card-delay'
export { HoverCardDisabled as Disabled } from 'patherns/examples/hover-card/hover-card-disabled'
export { HoverCardPositioning as Positioning } from 'patherns/examples/hover-card/hover-card-positioning'
export { HoverCardWithRoot as WithRoot } from 'patherns/examples/hover-card/hover-card-with-root'
