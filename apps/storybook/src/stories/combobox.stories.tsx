import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Combobox',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { ComboboxBasics as Basics } from 'patherns/examples/combobox/combobox-basics'
export { ComboboxDisabled as Disabled } from 'patherns/examples/combobox/combobox-disabled'
export { ComboboxLimits as Limits } from 'patherns/examples/combobox/combobox-limits'
export { ComboboxStore as Store } from 'patherns/examples/combobox/combobox-store'
export { ComboboxOpen as OpenOnClick } from 'patherns/examples/combobox/combobox-open'
export { ComboboxWithPersona as WithPersona } from 'patherns/examples/combobox/combobox-with-persona'
export { ComboboxSize as Size } from 'patherns/examples/combobox/combobox-size'
export { ComboboxInvalid as Invalid } from 'patherns/examples/combobox/combobox-invalid'
