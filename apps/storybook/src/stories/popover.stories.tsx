import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Overlays/Popover',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { PopoverBasics as Basics } from 'patherns/examples/popover/popover-basics'
export { PopoverPositioning as Positioning } from 'patherns/examples/popover/popover-positioning'
export { PopoverControlled as Controlled } from 'patherns/examples/popover/popover-controlled'
export { PopoverModal as Modal } from 'patherns/examples/popover/popover-modal'
export { PopoverCloseWithForm as CloseWithForm } from 'patherns/examples/popover/popover-close-with-form'
export { PopoverOffset as Offset } from 'patherns/examples/popover/popover-offset'
export { PopoverWithBg as WithBackground } from 'patherns/examples/popover/popover-with-bg'
