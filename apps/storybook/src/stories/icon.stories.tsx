import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Icon',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { IconBasic as Basics } from 'patherns/examples/icon/icon-basic'
export { ReactIcon } from 'patherns/examples/icon/react-icon'
export { IconSvg } from 'patherns/examples/icon/icon-svg'
