import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/Textarea',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { TextareaBasics as Basics } from 'patherns/examples/textarea/textarea-basics'
export { TextareaSizes as Size } from 'patherns/examples/textarea/textarea-sizes'
export { TextareaResize as Resize } from 'patherns/examples/textarea/textarea-resize'
export { TextareaErrorText as ErrorText } from 'patherns/examples/textarea/textarea-error-text'
export { TextareaHelperText as HelperText } from 'patherns/examples/textarea/textarea-helper-text'
export { TextareaVariants as Variants } from 'patherns/examples/textarea/textarea-variants'
