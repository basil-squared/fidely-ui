import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Checkbox',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { CheckboxBasics as Basics } from 'patherns/examples/checkbox/checkbox-basics'
export { CheckboxWithColors as WithColors } from 'patherns/examples/checkbox/checkbox-with-colors'
export { CheckboxWithControl as WithControl } from 'patherns/examples/checkbox/checkbox-with-control'
export { CheckboxWithIcon as WithIcon } from 'patherns/examples/checkbox/checkbox-with-icon'
export { CheckboxWithState as WithState } from 'patherns/examples/checkbox/checkbox-with-state'
export { CheckboxSizes as Size } from 'patherns/examples/checkbox/checkbox-sizes'
