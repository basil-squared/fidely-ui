import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Overlays/Dialog',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { DialogBasics as Basics } from 'patherns/examples/dialog/dialog-basics'
export { DialogControlled as Controlled } from 'patherns/examples/dialog/dialog-controlled'
export { DialogFocus as Focus } from 'patherns/examples/dialog/dialog-focus'
export { DialogSizes as Sizes } from 'patherns/examples/dialog/dialog-sizes'
export { DialogWithContext as WithContext } from 'patherns/examples/dialog/dialog-with-context'
export { DialogWithStore as WithStore } from 'patherns/examples/dialog/dialog-with-store'
export { DialogAlert as Alert } from 'patherns/examples/dialog/dialog-alert'
