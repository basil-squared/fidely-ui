import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Data Display/Badge',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { BadgeBasics as Basics } from 'patherns/examples/badge/badge-basics'
export { BadgeSizes as Sizes } from 'patherns/examples/badge/badge-sizes'
export { BadgeVariants as Variants } from 'patherns/examples/badge/badge-variants'
export { BadgeIcon as Icon } from 'patherns/examples/badge/badge-icon'
export { BadgeAsChild as AsChild } from 'patherns/examples/badge/badge-asChild'
