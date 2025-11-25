import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/PinInput',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { PinInputBasics as Basics } from 'patherns/examples/pin-input/pin-input-basics'
export { PinInputSizes as Size } from 'patherns/examples/pin-input/pin-input-sizes'
export { PinInputAlphanumeric as Alphanumeric } from 'patherns/examples/pin-input/pin-input-alphanumeric'
export { PinInputBlur as Blur } from 'patherns/examples/pin-input/pin-input-blur'
export { PinInputControlled as Controlled } from 'patherns/examples/pin-input/pin-input-controlled'
export { PinInputPlaceholder as Placeholder } from 'patherns/examples/pin-input/pin-input-placeholder'
export { PinInputField as Field } from 'patherns/examples/pin-input/pin-input-field'
export { PinInputOtp as Otp } from 'patherns/examples/pin-input/pin-input-otp'
export { PinInputMask as Mask } from 'patherns/examples/pin-input/pin-input-mask'
