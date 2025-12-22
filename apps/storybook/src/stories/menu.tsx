import type { Meta } from '@storybook/react-vite'
import { Box } from '@fidely-ui/react'

export default {
  title: 'Overlays/Menu',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export { MenuBasics as Basics } from 'patherns/examples/menu/menu-basics'
export { MenuGroup as Group } from 'patherns/examples/menu/menu-group'
export { MenuSubmenu as Submenu } from 'patherns/examples/menu/menu-submenu'
export { MenuWithLinks as WithLinks } from 'patherns/examples/menu/menu-with-links'
export { MenuAvatar as Avatar } from 'patherns/examples/menu/menu-avatar'
export { MenuCheckbox as Checkbox } from 'patherns/examples/menu/menu-checkbox'
export { MenuContext as Context } from 'patherns/examples/menu/menu-context'
export { MenuRadio as Radio } from 'patherns/examples/menu/menu-radio'
export { MenuDangerItem as DangerItem } from 'patherns/examples/menu/menu-danger-item'
