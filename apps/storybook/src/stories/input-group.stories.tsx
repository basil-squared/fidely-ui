import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Form/InputGroup',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { InputGroupBasics as Basics } from 'patherns/examples/input-group/input-group-basics'
export { InputGroupBothAddon as BothAddon } from 'patherns/examples/input-group/input-group-both-addon'
export { InputGroupCompAddon as CompAddon } from 'patherns/examples/input-group/input-group-comp-addon'
export { InputGroupEndAddon as EndAddon } from 'patherns/examples/input-group/input-group-end-addon'
export { InputGroupStyleAddon as StyleAddon } from 'patherns/examples/input-group/input-group-style-addon'
export { InputGroupWithKbd as WithKbd } from 'patherns/examples/input-group/input-group-with-kbd'
