import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Input',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { InputBasics as Basics } from 'patherns/examples/input/input-basics'
export { InputSizes as Size } from 'patherns/examples/input/input-sizes'
export { InputDisabled as Disabled } from 'patherns/examples/input/input-disabled'
export { InputErrorText as ErrorText } from 'patherns/examples/input/input-error-text'
export { InputHelperText as HelperText } from 'patherns/examples/input/input-helper-text'
export { InputVariants as Variants } from 'patherns/examples/input/input-variants'
export { InputPlaceholder as Placeholder } from 'patherns/examples/input/input-placeholder'
