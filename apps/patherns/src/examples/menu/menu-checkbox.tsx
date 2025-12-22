'use client'

import { Button, Menu, Portal, useCheckboxGroup } from '@fidely-ui/react'
import { CiSettings } from 'react-icons/ci'
import { FaCheck } from 'react-icons/fa6'

export const MenuCheckbox = () => {
  const group = useCheckboxGroup({ defaultValue: ['line-numbers'] })

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <CiSettings /> Editor options
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Editor options</Menu.ItemGroupLabel>

              {items.map(({ label, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={group.isChecked(value)}
                  onCheckedChange={() => group.toggleValue(value)}
                >
                  {label}
                  <Menu.ItemIndicator>
                    <FaCheck />
                  </Menu.ItemIndicator>
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const items = [
  { label: 'Line numbers', value: 'line-numbers' },
  { label: 'Word wrap', value: 'word-wrap' },
  { label: 'Minimap', value: 'minimap' },
]
