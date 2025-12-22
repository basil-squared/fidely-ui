'use client'

import { useState } from 'react'
import { Button, Menu, Portal } from '@fidely-ui/react'
import { FaSortAmountUp } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'

export const MenuRadio = () => {
  const [value, setValue] = useState('recent')

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <FaSortAmountUp /> Sort by
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.RadioItemGroup
              value={value}
              onValueChange={(e) => setValue(e.value)}
            >
              {items.map((item) => (
                <Menu.RadioItem key={item.value} value={item.value}>
                  {item.label}
                  <Menu.ItemIndicator>
                    <FaCheck />
                  </Menu.ItemIndicator>
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const items = [
  { label: 'Most recent', value: 'recent' },
  { label: 'Oldest first', value: 'oldest' },
  { label: 'Alphabetical', value: 'alphabetical' },
]
