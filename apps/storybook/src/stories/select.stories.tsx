import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Select',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { SelectBasics as Basics } from 'patherns/examples/select/select-basics'
export { SelectMultiple as Multiple } from 'patherns/examples/select/select-multiple'
export { SelectVariant as Colors } from 'patherns/examples/select/select-variant'
export { SelectTrigger as Control } from 'patherns/examples/select/select-trigger'
export { SelectControlled as Controlled } from 'patherns/examples/select/select-controlled'
export { SelectGroup as Group } from 'patherns/examples/select/select-group'
export { SelectPositioning as Positioning } from 'patherns/examples/select/select-positioning'
export { SelectSize as Size } from 'patherns/examples/select/select-size'
export { SelectInvalid as Invalid } from 'patherns/examples/select/select-invalid'
