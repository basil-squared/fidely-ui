import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Profile',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { ProfileBasics as Basics } from 'patherns/examples/profile/profile-basics'
export { ProfileSizes as Size } from 'patherns/examples/profile/profile-sizes'
export { ProfileHorizontal as Horinzontal } from 'patherns/examples/profile/profile-horizontal'
export { ProfileVertical as Vertical } from 'patherns/examples/profile/profile-vertical'
