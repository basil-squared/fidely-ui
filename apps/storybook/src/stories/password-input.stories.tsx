import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/PasswordInput',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { PasswordInputBasics as Basics } from 'patherns/examples/password-input/password-input-basics'
export { PasswordInputSizes as Size } from 'patherns/examples/password-input/password-input-sizes'
export { PasswordInputInvalid as Invalid } from 'patherns/examples/password-input/password-input-invalid'
export { PasswordInputIgnore as Ignore } from 'patherns/examples/password-input/password-input-ignore'
export { PasswordInputAsChild as AsChild } from 'patherns/examples/password-input/password-input-as-child'
export { PasswordInputAuto as Auto } from 'patherns/examples/password-input/password-input-auto'
export { PasswordInputControlled as Controlled } from 'patherns/examples/password-input/password-input-controlled'
export { PasswordInputField as Field } from 'patherns/examples/password-input/password-input-field'
export { PasswordInputIcon as Icon } from 'patherns/examples/password-input/password-input-icon'
